
import React, { useState } from 'react';
import db from '../../../firebase'; 
import styles from './BlogStore.module.css';

const BlogStore = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection('blogs').add({
        imageUrl: imageUrl,
        title: title,
        date: date // Add the date to the data sent to Firestore
      });

      // Clear input fields
      setImageUrl('');
      setTitle('');
      setDate('');

      console.log('Data successfully added to Firestore');
    } catch (error) {
      console.error('Error adding data to Firestore: ', error);
    }
  };

  return (
    <div className={styles.blog_form}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="date" // Use type="date" for date input
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default BlogStore;

