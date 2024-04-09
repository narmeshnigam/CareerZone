import React from 'react';
import './CareerBlogs.css';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const CareerBlogs = () => {
  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
  });

  const top100Films = [
    { title: 'Engineering Course' },
    { title: 'Madical'},
    { title: 'D. Pharma'},
    
  ];

  return (
    <div className='careerblogs__container'>
      <div className='hrrr__'>
        <div className='careerblogs__heading'>Blogs</div>
        <div className='select_category_'>
          <Autocomplete
            id="filter-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            filterOptions={filterOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Select Category" />}
          />
        </div>
      </div>

      <div className='careerblogs__cards'>
        <div className='careerblogs__card'>
          <div className='careerblogs_card_img1'>
            <img src="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2024/03/MSFT_M365_MAR28_328512a_Blog_BlogHeader_230328.webp" alt="" width="100%" />
            <div className='content__heading12'>Proactive Career Planning for Graduates: A Guide</div>
            <div className='content__heading123'>April 2024</div>
          </div>
        </div>
        <div className='careerblogs__card'>
          <div className='careerblogs_card_img1'>
            <img src="https://static.student.com/storm-frontend-wp/uploads/2024/04/AI-Blog-Image-1-1200x675.jpg" alt="" width="100%" />
            <div className='content__heading12'>AI-Powered Learning Revolution: How Tech Supercharges Your Studies. </div>
            <div className='content__heading123'>April 2024</div>
          </div>
        </div>
        <div className='careerblogs__card'>
          <div className='careerblogs_card_img1'>
            <img src="https://static.student.com/storm-frontend-wp/uploads/2024/04/AI-Blog-Image-5-1200x675.jpg" alt="" width="100%" />
            <div className='content__heading12'>Popular Student AI Platforms</div>
            <div className='content__heading123'>April 2024</div>
          </div>
        </div>
        <div className='careerblogs__card'>
          <div className='careerblogs_card_img1'>
            <img src="https://static.student.com/storm-frontend-wp/uploads/2024/03/March-Travel-Blog-1200x675.jpg" alt="" width="100%" />
            <div className='content__heading12'>The Ultimate Student Guide to Traveling Smart and Embracing Global Citizenship</div>
            <div className='content__heading123'>April 2024</div>
          </div>
        </div>
        <div className='careerblogs__card'>
          <div className='careerblogs_card_img1'>
            <img src="https://static.student.com/storm-frontend-wp/uploads/2024/02/14-1200x675.jpg" alt="" width="100%" />
            <div className='content__heading12'>Transforming Travel into a Career Path: A Comprehensive Guide</div>
            <div className='content__heading123'>April 2024</div>
          </div>
        </div>
        <div className='careerblogs__card'>
          <div className='careerblogs_card_img1'>
            <img src="https://static.student.com/storm-frontend-wp/uploads/2024/04/Exam-outcome-1200x675.jpg" alt="" width="100%" />
            <div className='content__heading12'>Guide to dealing with the last few weeks of a term</div>
            <div className='content__heading123'>April 2024</div>
          </div>
        </div>
        <div className='careerblogs__card'>
          <div className='careerblogs_card_img1'>
            <img src="https://static.student.com/storm-frontend-wp/uploads/2024/04/Exam-outcome-1200x675.jpg" alt="" width="100%" />
            <div className='content__heading12'>Guide to dealing with the last few weeks of a term</div>
            <div className='content__heading123'>April 2024</div>
          </div>
        </div>
        <div className='careerblogs__card'>
          <div className='careerblogs_card_img1'>
            <img src="https://static.student.com/storm-frontend-wp/uploads/2024/04/Exam-outcome-1200x675.jpg" alt="" width="100%" />
            <div className='content__heading12'>Guide to dealing with the last few weeks of a term</div>
            <div className='content__heading123'>April 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerBlogs;
