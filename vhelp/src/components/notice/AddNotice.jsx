import React, { useState, useEffect } from 'react';
import { auth, db, storage } from '../../firebase-config.js';
import { getDocs, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import NoticeBoard from './NoticeBoard';

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
                fetchAllPdfs(); // Fetch PDFs when user is authenticated
            } else {
                setCurrentUserEmail('');
                setIsAdmin(false);
                setLoading(false);
            }
        });

        return () => unsubscribe();

    }, []);

    const checkAdminOrNot = async (email) => {
        const querySnapshot = await getDocs(collection(db, 'admin'));
        const documents = querySnapshot.docs.map((doc) => doc.data());
        const adminEmails = documents.map((doc) => doc.email);
        if (adminEmails.includes(email)) {
            setIsAdmin(true);
        }
        setLoading(false);
    };

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
                </div>
            )}
            <NoticeBoard pdfFiles={pdfFiles} />
            {loading && <div>Loading...</div>}
        </div>
    );
}

export default AddNotice;
