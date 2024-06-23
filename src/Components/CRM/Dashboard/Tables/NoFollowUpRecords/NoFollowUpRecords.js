// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './NoFollowUpRecords.module.css';
// import { DataGrid } from '@mui/x-data-grid';
// import db from '../../../../../firebase';

// const NoFollowUpRecords = () => {
//     const [leads, setLeads] = useState([]);
//     const [followUp, setFollowUp] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchLeads = async () => {
//             db.collection('leads').onSnapshot(snapshot => {
//                 const leadsData = snapshot.docs.map(doc=> ({
//                     id: doc.id,
//                     leadNumber: doc.data().leadNumber,
//                     // createdDate: doc.data().createdDate,
//                     // createdBy : doc.data().createdBy,
//                     // assignedBy: doc.data().assignedBy,
//                     // assignedTo: doc.data().assignedTo,
//                     // assignmentDate: doc.data().assignmentDate,
//                     bscc: doc.data().bscc,
//                     name: doc.data().name,
//                     email: doc.data().email,
//                     courseInterest: doc.data().courseInterest,
//                     college: doc.data().college,
//                     mobileNumber: doc.data().mobileNumber,
//                     alternateMobile: doc.data().alternateMobile,
//                     city: doc.data().city,
//                     district: doc.data().district,
//                     locality: doc.data().locality,
//                     pin: doc.data().pin,
//                     budget: doc.data().budget,
//                     // source: doc.data().source,
//                     // remarks: doc.data().remarks,
//                     // relation: doc.data().relation
//                 }));
//                 setLeads(leadsData);
//             });
//         };

//         const fetchFollowUp = async () => {
//             db.collection('followUp').onSnapshot(snapshot => {
//                 const followUpData = snapshot.docs.map(doc => ({
//                     leadNo: doc.data().leadNo,
//                 }));
//                 setFollowUp(followUpData);
//             });
//         };

        
//         fetchLeads();
//         fetchFollowUp();
//     }, []);
    
//     const leadsWithoutFollowUp = leads.filter(lead => {
//         return !followUp.some(follow => follow.leadNo === lead.leadNumber);
//     });

//     const leadsWithoutFollowUpWithSerial = leadsWithoutFollowUp.map((lead, index) => ({
//         ...lead,
//         serialNumber: index + 1
//     }));

//     const columns = [
//         { field: 'serialNumber', headerName: 'S.no', sortable: false, flex: 0.5},
//         { field: 'leadNumber', headerName: 'Number', flex: 1},
//         { field: 'name', headerName: 'Name', flex: 1  },
//         { field: 'email', headerName: 'Email ID', flex: 1 },
//         { field: 'courseInterest', headerName: 'Course', flex: 1 },
//         { field: 'college', headerName: 'College', flex: 1 },
//         { field: 'mobileNumber', headerName: 'Mobile Number', type: 'number', flex: 1 },
//         { field: 'alternateMobile', headerName: 'Alternate Mobile', type: 'number', flex: 1 },
//         { field: 'city', headerName: 'City', flex: 1 },
//         { field: 'locality', headerName: 'Locality', flex: 1 },
//         { field: 'pin', headerName: 'Pin Code', type: 'number', flex: 1 },
//         { field: 'budget', headerName: 'Budget', type: 'number', flex: 1 },
//     ];

//     return (
//         <div className={styles.container}>
//             <div className={styles['heading-with-homebtn']}>
//                 <div className={styles.heading}>Leads With No Follow Up Records</div>
//             </div>
//             <DataGrid
//                 rows={leadsWithoutFollowUpWithSerial}
//                 columns={columns}
//                 pageSize={10}
//                 autoHeight
//                 disableColumnMenu
//                 disableSelectionOnClick
//                 onRowClick={row => navigate(`/followUp/${row.id}`)}
//             />
//         </div>
//     );
// };

// export default NoFollowUpRecords;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NoFollowUpRecords.module.css';
import { DataGrid } from '@mui/x-data-grid';
import db from '../../../../../firebase';

const NoFollowUpRecords = () => {
    const [leads, setLeads] = useState([]);
    const [followUp, setFollowUp] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLeads = async () => {
            db.collection('leads').onSnapshot(snapshot => {
                const leadsData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    leadNumber: doc.data().leadNumber,
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
                }));
                setLeads(leadsData);
            });
        };

        const fetchFollowUp = async () => {
            db.collection('followUp').onSnapshot(snapshot => {
                const followUpData = snapshot.docs.map(doc => ({
                    leadNo: doc.data().leadNo,
                }));
                setFollowUp(followUpData);
            });
        };

        fetchLeads();
        fetchFollowUp();
    }, []);

    const leadsWithoutFollowUp = leads.filter(lead => {
        return !followUp.some(follow => follow.leadNo === lead.leadNumber);
    });

    // Ensure the leads are sorted by a consistent key, like 'leadNumber'
    const sortedLeadsWithoutFollowUp = leadsWithoutFollowUp.sort((a, b) => a.leadNumber - b.leadNumber);

    // Add serial number to each lead
    const leadsWithoutFollowUpWithSerial = sortedLeadsWithoutFollowUp.map((lead, index) => ({
        ...lead,
        serialNumber: index + 1
    }));

    const columns = [
        { field: 'serialNumber', headerName: 'S.no', sortable: false, flex: 0.5 },
        { field: 'leadNumber', headerName: 'Number', flex: 1 },
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'email', headerName: 'Email ID', flex: 1 },
        { field: 'courseInterest', headerName: 'Course', flex: 1 },
        { field: 'college', headerName: 'College', flex: 1 },
        { field: 'mobileNumber', headerName: 'Mobile Number', type: 'number', flex: 1 },
        { field: 'alternateMobile', headerName: 'Alternate Mobile', type: 'number', flex: 1 },
        { field: 'city', headerName: 'City', flex: 1 },
        { field: 'locality', headerName: 'Locality', flex: 1 },
        { field: 'pin', headerName: 'Pin Code', type: 'number', flex: 1 },
        { field: 'budget', headerName: 'Budget', type: 'number', flex: 1 },
    ];

    return (
        <div className={styles.container}>
            <div className={styles['heading-with-homebtn']}>
                <div className={styles.heading}>Leads With No Follow Up Records</div>
            </div>
            <DataGrid
                rows={leadsWithoutFollowUpWithSerial}
                columns={columns}
                pageSize={10}
                autoHeight
                disableColumnMenu
                disableSelectionOnClick
                onRowClick={(row) => navigate(`/followUp/${row.id}`)}
            />
        </div>
    );
};

export default NoFollowUpRecords;

