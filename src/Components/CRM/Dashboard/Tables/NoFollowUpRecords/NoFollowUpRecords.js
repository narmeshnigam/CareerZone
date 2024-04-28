import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NoFollowUpRecords.module.css'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const NoFollowUpRecords = () => {

const columns = [
    { field: 'serialNumber', headerName: 'S.no', sortable: false},
    { field: 'leadNumber', headerName: 'Number'},
    { field: 'name', headerName: 'Name',  },
    { field: 'email', headerName: 'Email ID' },
    { field: 'courseInterest', headerName: 'Course' },
    { field: 'college', headerName: 'College' },
    { field: 'mobileNumber', headerName: 'Mobile Number', type: 'number' },
    { field: 'alternateMobile', headerName: 'Alternate Mobile', type: 'number' },
    { field: 'city', headerName: 'City' },
    { field: 'locality', headerName: 'Locality' },
    { field: 'pin', headerName: 'Pin Code', type: 'number' },
    { field: 'budget', headerName: 'Budget', type: 'number' },
    { 
      field: 'view', 
      headerName: 'View', 
      sortable: false, 
      renderCell: (params) => (
        <Button
          variant="contained"
          color="success"
        //   onClick={() => handleView(params.row.id)}
        >
          View
        </Button>
      )
    },
    { 
      field: 'delete', 
      headerName: 'Delete', 
      sortable: false, 
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
        //   onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      )
    },
    { 
      field: 'update', 
      headerName: 'Update', 
      sortable: false, 
      renderCell: (params) => (
        <Button
          variant="contained"
          color="info"
        //   onClick={() => handleUpdate(params.row.id)}
        >
          Update
        </Button>
      )
    }
  ];

  return (
    <div className={styles.container}>
        {/* <div style={{display: update === true ? "block":"none"}}><PopUpForm
            value={update} 
            onback={() => handleback()}
            id={notChange.id}
            leadNumber={notChange.leadNumber}
            createdDate={notChange.createdDate}
            createdBy={notChange.createdBy}
            assignmentDate={notChange.assignmentDate}
            assignedBy={notChange.assignedBy}
        /></div> */}
            <div className={styles['heading-with-homebtn']}>
                <div className={styles.heading}>No Follow Up Records</div>
            </div>
        <DataGrid
            // rows={leads}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 10 },
            },
            }}
            pageSizeOptions={[5, 10]}
            sx={{
              backgroundColor:'#EDEFF5'
            }}
        />
    </div>
  )
}

export default NoFollowUpRecords;
