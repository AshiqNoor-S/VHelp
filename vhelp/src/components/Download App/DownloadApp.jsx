import React from 'react'
import DownloadAppImage from './mobileimage.png'
import '../styles/DownloadApp.css'

function DownloadApp() {
  return (
    <div className='download-app'>
      <div>
        <img src={DownloadAppImage}/>
      </div>
      <div className='download-app-text'>Download Our App for the Full Experience of our Food Ordering System</div>
    </div>
  )
}

export default DownloadApp
