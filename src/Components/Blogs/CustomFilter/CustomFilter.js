import React from 'react'
import './CustomFilter.css'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {options} from './CustomFilterOption.js'

const CustomFilter = () => {
   const filterOptions = createFilterOptions({
       matchFrom: 'start',
       stringify: (option) => option.title,
  });
  return (
    <Autocomplete
        id="filter-demo"
        options={options}
        getOptionLabel={(option) => option.title}
        filterOptions={filterOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Filter" />}
    />
  )
}

export default CustomFilter
