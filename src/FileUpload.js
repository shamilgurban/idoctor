
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const maxFileSize = 5 * 1024 * 1024;

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("file", file);

  
    fetch("http://localhost:3000/uploads", { // Server URL-i
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("File uploaded successfully:", data);
        alert("Fayl uğurla yükləndi!");
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        alert("Fayl yüklənərkən xəta baş verdi.");
      });
  };

  const onDrop = (acceptedFiles) => {
    const filteredFiles = acceptedFiles.filter((file) => file.size <= maxFileSize);
    if (filteredFiles.length !== acceptedFiles.length) {
      alert("5 MB-dən böyük olan fayllar yüklənə bilməz!");
    }
    setFiles((prevFiles) => [...prevFiles, ...filteredFiles]);

    
    filteredFiles.forEach((file) => uploadFile(file));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div className="upload-container" >
      <div {...getRootProps()} style={{ cursor: 'pointer' }}>
        <input {...getInputProps()} />
        <img src="upload-icon.png" style={{ width: '50px', marginBottom: '10px' , marginLeft: '35px'}} />
        <p style={{color: '#fff'}}>Drag & Drop to Upload File</p>
        <p style={{color: '#fff'}}>OR</p>
      </div>
      <button
        onClick={() => document.querySelector('.upload-container input').click()}
        style={{
          backgroundColor: '#fff', color: '#4A90E2', border: 'none', padding: '10px 20px',
          borderRadius: '4px', cursor: 'pointer'
        }}
      >
        Browse File
      </button>
    </div>
  );
};

export default FileUpload;
