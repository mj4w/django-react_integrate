
import React, { useState } from 'react';
import axios from 'axios';

function Form({ addNewData }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreate = () => {
    const formData = {
      title: title,
      content: content,
    };

    axios.post('http://localhost:8000/api/app/', formData)
      .then((response) => {
        console.log('Successfully Created:', response.data);
        addNewData(response.data);
        setTitle('');
        setContent('');
      })
      .catch((error) => {
        console.error('Error Creating Instance:', error);
      });

  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Type Title Here</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Type Content Here</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="ui submit button" onClick={handleCreate}>
            Create
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
