import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      console.log('Fetching data for ID:', id);
      axios.get(`http://localhost:8000/api/app/${id}/`)
        .then(response => {
            const { title,content } = response.data;
            setTitle(title);
            setContent(content);
        })
        .catch(error => {
          console.error('Error', error);
        });
    }, [id]);
  
    const handleUpdate = () => {
        const formData = {
            title:title,
            content:content,
        };
        axios.put(`http://localhost:8000/api/app/${id}/update/`,formData)
        .then((response) =>{
            console.log('Successfully Updated',response.data);
            navigate('/');
        })
        .catch((error) => {
            console.error('Error',error);

        });
    }
  
    return (
      <div>
          <h1>Detail View</h1>
          <div className='ui form'>
            <div className='field'>
                <label>Change Title Here</label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Change Content here</label>
                <input type='text' value={content} onChange={(e) => setContent(e.target.value)} />

                <div className='ui submit button' onClick={handleUpdate}>Update</div>
            </div>
          </div>
      </div>
    );
  }

export default Update