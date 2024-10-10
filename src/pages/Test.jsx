import React, { useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/Doctors/GetAllDoctors');
        console.log("All Doctors:", response.data); 
      } catch (error) {
        console.error("Error fetching doctors:", error); 
      }
    };

    fetchDoctors();
  }, []); 

  return (
    <div>
      <h1>Check Console for All Doctors Data</h1>
    </div>
  );
};

export default Test;
