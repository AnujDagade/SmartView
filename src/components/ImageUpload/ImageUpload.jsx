import React from 'react'
import "./ImageUpload.css";



export default function ImageUpload() {

  // create state setselected files to store the images uploaded
  const [selectedFiles, setSelectedFiles] = React.useState()

  function onFileUpload(event) {
    event.preventDefault();
    console.log(event.target.files)
    setSelectedFiles(event.target.files)

  }

  async function onUpload(event) {
    event.preventDefault();

    const token = localStorage.getItem('token');


    console.log("Images Uploaded")
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('images', selectedFiles[i])
    }
    const response = await fetch('https://smartviewgal.azurewebsites.net/upload', {
      contentType: 'multipart/form-data',
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },

      credentials: 'include',
    })
    if (response.status === 200) {
      alert("Images Uploaded")
    } else {
      alert("Error")
    }
  }

  return (
    <div>
      <form className="form-image" >
        <label htmlFor="ImageUpload">Upload Image</label>
        <input type="file" className='file-upload' multiple accept='image/*' onChange={onFileUpload} name='images' />

        <button className="submit-image" onClick={onUpload}>Upload</button>
      </form>
    </div>
  )
}
