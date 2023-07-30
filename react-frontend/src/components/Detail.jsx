import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

function Detail() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

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

  
  // for delete
  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/app/${id}/delete/`)
    .then((response) => {
        console.log("Delete Successfully")
        navigate('/');

    })
    .catch((error) => {
        console.error("Error Deleting");
    })
  }
  


  return (
    <div>
        <h1>Detail View</h1>
        <p>Title: {data.title}</p>
        <p>Content: {data.content}</p>
        <Link to={`/detail/${id}/update/`}>Update</Link>
        
         <button className='ui submit button' onClick={handleDelete}> Delete</button>
    </div>
  );
}

export default Detail;


