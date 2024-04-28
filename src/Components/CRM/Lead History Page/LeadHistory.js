import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LeadHistory.module.css';
import db from '../../../firebase';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import PopUpForm from './PopUpForm/PopUpForm';

const LeadHistory = () => {
  
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);
  const [notChange, setNotChange] = useState({
    id:'',
    leadNumber: '',
    createdDate: '',
    createdBy: '',
    assignmentDate: '',
    assignedBy: '',
  })

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
          onClick={() => handleView(params.row.id)}
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
          onClick={() => handleDelete(params.row.id)}
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
          onClick={() => handleUpdate(params.row.id)}
        >
          Update
        </Button>
      )
    }
  ];

  useEffect(() => {
    const fetchLeads = async () => {
      db.collection('leads').onSnapshot(snapshot => {
        setLeads(snapshot.docs.map((doc, index) => ({
          id: doc.id,
          serialNumber: index + 1,
          leadNumber: doc.data().leadNumber,
          createdDate: doc.data().createdDate,
          createdBy : doc.data().createdBy,
          assignedBy: doc.data().assignedBy,
          assignedTo: doc.data().assignedTo,
          assignmentDate: doc.data().assignmentDate,
          bscc: doc.data().bscc,
          name: doc.data().name,
          email: doc.data().email,
          courseInterest: doc.data().courseInterest,
          college: doc.data().college,
          mobileNumber: doc.data().mobileNumber,
          alternateMobile: doc.data().alternateMobile,
          city: doc.data().city,
          district: doc.data().district,
          locality: doc.data().locality,
          pin: doc.data().pin,
          budget: doc.data().budget,
          source: doc.data().source,
          remarks: doc.data().remarks,
          relation: doc.data().relation
        })));
      });
    };

    fetchLeads();
  }, []);

  const handleback = () => {
    setUpdate(false);
  };

  const handleView = (id) => {
    navigate(`/followUp/${id}`);
  }

  const handleDelete = async(id) => {
    await db.collection("leads").doc(id).delete();
  };

  const handleUpdate = (id) => {
    setUpdate(true)
    leads.forEach((data) => {
      if(data.id === id)
      {
        setNotChange({
          id: id,
          leadNumber: data.leadNumber,
          createdDate: data.createdDate,
          createdBy: data.createdBy,
          assignmentDate: data.assignmentDate,
          assignedBy: data.assignedBy,
        })
      }
    })
  }

  return (
    <div className={styles.container}>
        <div style={{display: update === true ? "block":"none"}}><PopUpForm
            value={update} 
            onback={() => handleback()}
            id={notChange.id}
            leadNumber={notChange.leadNumber}
            createdDate={notChange.createdDate}
            createdBy={notChange.createdBy}
            assignmentDate={notChange.assignmentDate}
            assignedBy={notChange.assignedBy}
        /></div>
        <div style={{position:'relative'}}>
            <div className={styles['heading-with-homebtn']}>
                <div><svg
                style={{filter: 'invert(1)'}}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
              >
                <path d="M12 2L1 11h3v9h6v-6h4v6h6v-9h3L12 2zm2 16h-4v-6H8v6H4v-8.811L12 4.415l8 8.774V18h-4v-6h-4v6z" />
              </svg></div>
                <div className={styles.heading}>Lead History</div>
            </div>
        </div>
        <DataGrid
            rows={leads}
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

export default LeadHistory;
