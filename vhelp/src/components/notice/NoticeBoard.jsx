import React from 'react';
import '../styles/notice.css'

function NoticeBoard({ pdfFiles }) {
    return (
        <div className=''>
            <h2>Notice Board</h2>
            <div className="pdf-grid">
                {pdfFiles.map((file, index) => (
                    <div key={index} className="pdf-item">
                        <div className="pdf-container">
                            <embed src={file.url} type="application/pdf" />
                        </div>
                        <p>{file.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NoticeBoard;
