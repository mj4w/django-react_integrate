import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Detail() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    console.log('Fetching data for ID:', id);
    axios.get(`http://localhost:8000/api/app/${id}/`)
      .then(response => {
        console.log('API response:', response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, [id]);

  console.log('Data:', data);

  return (
    <div>
      <h1>Detail View</h1>
      <p>Title: {data.title}</p>
      <p>Content: {data.content}</p>
    
    </div>
  );
}

export default Detail;


