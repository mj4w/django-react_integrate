
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function List({ addNewData }) {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const fetchData = () => {
    axios.get('http://localhost:8000/api/app/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error Fetching Data', error);
      });
  };

  useEffect(() => {

    fetchData(); 
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchData, 100);
    return () => clearInterval(interval);
  }, [data]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/app/${id}/delete/`)
      .then((response) => {
        console.log('Successfully Deleted', response.data);
        // Perform any additional actions or updates after deletion if needed.
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }

  return (
    <div>
        {data.map((item) => (
       
            <ul className="ui list" key={item.id}>
                <li>{item.title}</li>
                <li>{item.content}</li>
                <Link to={`/detail/${item.id}/`}>View</Link>
                <div className='ui submit button' onClick={() => handleDelete(item.id)}>Delete {item.id}</div>
            </ul>
        ))}
    </div>
  );
}

export default List;
