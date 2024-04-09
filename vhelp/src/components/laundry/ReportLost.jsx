import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth } from '../../firebase-config';
import "../styles/ReportLost.css";

function ReportLost() {
    const [imageName, setImageName] = useState('');
    const [foundDate, setFoundDate] = useState('');
    const [company, setCompany] = useState('');
    const [userName, setUserName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const storage = getStorage();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = auth.currentUser;
        if (!user) {
            console.error('User not authenticated');
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = async (e) => {
            const fileBytes = new Uint8Array(e.target.result);
            const fileRef = ref(storage, `images/${imageFile.name}`);
            await uploadBytes(fileRef, fileBytes);

            const imageUrl = await getDownloadURL(fileRef);

            const data = {
                imageName: imageName,
                foundDate: foundDate,
                company: company,
                userName: userName,
                phoneNo: phoneNo,
                imageUrl: imageUrl,
                userId: user.uid // Add the user ID to the data
            };

            try {
                const docRef = await addDoc(collection(db, 'lostItems'), data);
                console.log('Document written with ID: ', docRef.id);
                setSubmissionStatus('success');
            } catch (error) {
                console.error('Error adding document: ', error);
                setSubmissionStatus('error');
            }
        };
        fileReader.readAsArrayBuffer(imageFile);
    };

    return (
        <div className="report-lost">
            <h2>Report Lost Item</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Image:
                    <input type="file" onChange={handleImageUpload} />
                </label>
                <br />
                <label>
                    Item Name:
                    <input type="text" className="input-field" value={imageName} onChange={(e) => setImageName(e.target.value)} />
                </label>
                <br />
                <label>
                    Found Date:
                    <input type="date" className="input-field" value={foundDate} onChange={(e) => setFoundDate(e.target.value)} />
                </label>
                <br />
                <label>
                    Company:
                    <input type="text" className="input-field" value={company} onChange={(e) => setCompany(e.target.value)} />
                </label>
                <br />
                <label>
                    Your Name:
                    <input type="text" className="input-field" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </label>
                <br />
                <label>
                    Your Phone Number:
                    <input type="text" className="input-field" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                </label>
                <br />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
            {submissionStatus === 'success' && <p>Submitted successfully!</p>}
            {submissionStatus === 'error' && <p>Error submitting data. Please try again.</p>}
        </div>
    );
}

export default ReportLost;
