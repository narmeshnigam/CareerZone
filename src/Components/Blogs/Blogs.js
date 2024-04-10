import React from 'react'
import './Blogs.css'
import CustomFilter from './CustomFilter/CustomFilter'
import BlogCard from './BlogCard/BlogCard'

const Blogs = () => {
  return (
    <div className='blogs__main__container'>
        <div className='blogs__inner__container'>
            <div className='blogs__main__heading'>Life at Career Zone</div>
            <CustomFilter/>
        </div>
        <div className='blogs__card__container'>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
    </div>
  )
}


export default Blogs
