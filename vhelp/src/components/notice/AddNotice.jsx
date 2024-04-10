import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase-config';
import { getDocs, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import NoticeBoard from './NoticeBoard';
import { Document, Page } from 'react-pdf'; // Import PDF viewer components

function AddNotice() {
    const [currentUserEmail, setCurrentUserEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pdfFiles, setPdfFiles] = useState([]);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUserEmail(user.email);
                checkAdminOrNot(user.email);
            } else {
                setCurrentUserEmail('');
                setIsAdmin(false);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!isAdmin) {
            fetchAllPdfs();
        }
    }, [isAdmin]);

    const checkAdminOrNot = async (email) => {
        const querySnapshot = await getDocs(collection(db, 'admin'));
        const documents = querySnapshot.docs.map((doc) => doc.data());
        const adminEmails = documents.map((doc) => doc.email);
        if (adminEmails.includes(email)) {
            setIsAdmin(true);
        }
        setLoading(false);
    };

    const storage = getStorage();

    const handleFileSelect = async (event) => {
        const files = event.target.files;

        setUploading(true);
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type === 'application/pdf') {
                const storageRef = ref(storage, `pdfs/${file.name}`);
                await uploadBytes(storageRef, file);
                const downloadURL = await getDownloadURL(storageRef);
                setPdfFiles((prevFiles) => [...prevFiles, { name: file.name, url: downloadURL }]);
            }
        }
        setUploading(false);
    };

    const fetchAllPdfs = async () => {
        const listRef = ref(storage, 'pdfs');
        const { items } = await listAll(listRef);
        const urls = await Promise.all(items.map((itemRef) => getDownloadURL(itemRef)));
        setPdfFiles(urls.map((url) => ({ name: '', url })));
    };

    return (
        <div>
            <h1>Add Notice</h1>
            {isAdmin && (
                <div>
                    <input type="file" id="fileInput" accept=".pdf" onChange={handleFileSelect} multiple />
                    {uploading && <div>Uploading...</div>}
                    <div>
                        {pdfFiles.map((file, index) => (
                            <div key={index}>
                                <Document file={file.url}>
                                    <Page pageNumber={1} />
                                </Document>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {!isAdmin && (
                <div>
                    {pdfFiles.map((file, index) => (
                        <div key={index}>
                            <a href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>
                        </div>
                    ))}
                </div>
            )}
            <NoticeBoard pdfFiles={pdfFiles} />
            {loading && <div>Loading...</div>}
        </div>
    );
}

export default AddNotice;
