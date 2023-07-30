
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function List({ addNewData }) {
  const [data, setData] = useState([]);



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

  return (
    <div>
        {data.map((item) => (
       
            <ul className="ui list" key={item.id}>
                <li>{item.title}</li>
                <li>{item.content}</li>
                <Link to={`/detail/${item.id}/`}>View</Link>
            </ul>
        ))}
    </div>
  );
}

export default List;
