// import React from 'react'
// import './Blogs.css'
// import CustomFilter from './CustomFilter/CustomFilter'
// import BlogCard from './BlogCard/BlogCard'

// const Blogs = () => {
//   return (
//     <div className='blogs__main__container'>
//         <div className='blogs__inner__container'>
//             <div className='blogs__main__heading'>Life at Career Zone</div>
//             <CustomFilter/>
//         </div>
//         <div className='blogs__card__container'>
//             <BlogCard/>
//             <BlogCard/>
//             <BlogCard/>
//             <BlogCard/>
//             <BlogCard/>
//             <BlogCard/>
//         </div>
//     </div>
//   )
// }


// export default Blogs

import React, { useEffect, useState } from 'react';
import db from '../../firebase'; // Adjust the path to your Firebase configuration
import CustomFilter from './CustomFilter/CustomFilter';
import BlogCard from './BlogCard/BlogCard';
import './Blogs.css';

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsCollection = await db.collection('blogs').get();
        const blogsData = blogsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBlogData(blogsData);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, []);

  return (



    <div className='blogs__main__container'>
      <div className='blogs__inner__container'>
        <div className='blogs__main__heading'>Life at Career Zone</div>
        <CustomFilter/>
        
      </div>
     
      <div className='blogs__card__container'>
        {blogData.map(blog => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            date={blog.date} 
            imageUrl={blog.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
