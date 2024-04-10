import React from 'react';

function NoticeBoard({ pdfFiles }) {
    return (
        <div>
            <h2>Notice Board</h2>
            <div className="pdf-grid">
                {pdfFiles.map((file, index) => (
                    <div key={index} className="pdf-item">
                        <img src={`https://pdf-thumbnail-url.com/${file.name}`} alt={file.name} />
                        <p>{file.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NoticeBoard;
