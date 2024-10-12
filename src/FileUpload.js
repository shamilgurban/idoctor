import React, { useState } from "react";

function FileUpload({ setShowPopup }) {
  // State to manage popup visibility and the file upload
  const [selectedFile, setSelectedFile] = useState(null);

  // Toggle the popup visibility
  const togglePopup = () => {
    console.log(setShowPopup)
    setShowPopup(false);
  };

  // Handle file input change
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log("File submitted:", selectedFile);
      // You can handle the file upload here (e.g., send it to a server)
      alert("File submitted successfully!");
      setShowPopup(false); // Close the popup after submission
    } else {
      alert("Please select a file before submitting.");
    }
  };

  return (
    <div className="popup-overlay">
          <div className="popup-content">
            <h2 className="upload-text">Upload Your File</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                onChange={handleFileChange}
                className="file-input"
              />
              <div className="button-group">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button type="button" className="close-btn" onClick={togglePopup}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
  );
}

export default FileUpload;