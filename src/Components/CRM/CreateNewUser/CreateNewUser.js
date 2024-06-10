import React, { useState, useEffect } from "react";
import styles from "./CreateNewUser.module.css";
import { Link } from "react-router-dom";
import db from "../../../firebase";

const UserListsPage = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRef = await db.collection("users").get();
        const fetchedUsers = usersRef.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  const handleEditUser = (user) => {
    setEditUser(user);
    setIsEditDialogOpen(true);
  };

  const handleCancelEdit = () => {
    setIsEditDialogOpen(false);
    setEditUser(null);
  };

  const handleSaveChanges = async () => {
    try {
      await db.collection("users").doc(editUser.id).update(editUser);
      setUsers(
        users.map((user) => (user.id === editUser.id ? editUser : user))
      );
      setIsEditDialogOpen(false);
      console.log("User edited successfully:", editUser.id);
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const handleCloseDialog = () => {
    setIsEditDialogOpen(false);
    setEditUser(null);
  };

  const handleDeleteUser = async (userId) => {
    try {
      await db.collection("users").doc(userId).delete();
      setUsers(users.filter((user) => user.id !== userId));
      console.log("User deleted successfully:", userId);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className={styles.createUserLists__container}>
      <div className={styles.lead_Listspage_heading}>
        <Link to="/dashboard">
          <div className={styles.lead_Listspagehome_ic}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="70"
              fill="black"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
          </div>
        </Link>
        <div className={styles.lead_Listspagehomeheading_}>User History</div>
      </div>
      <div className={styles.userLists_tab_heading}>User Lists</div>
      <div className={styles.userLists__tab}>
        <table>
          <thead>
            <tr>
              <th>S.NO.</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Approval Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <button onClick={() => handleEditUser(user)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isEditDialogOpen && (
        <div className={styles.editDialog}>
          <button onClick={handleCloseDialog} className={styles.closeButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="15"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
            </svg>
          </button>

          <input
            type="text"
            value={editUser.name}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
          />
          <input
            type="text"
            value={editUser.email}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
          />
          <input
            type="text"
            value={editUser.phone}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
          />
          <input
            type="text"
            value={editUser.role}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
          />
          <input
            type="text"
            value={editUser.status}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
          />
          <br />
          <button onClick={handleSaveChanges} className={styles.userLists__bt}>
            Save
          </button>
          <button onClick={handleCancelEdit} className={styles.userLists__bt1}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default UserListsPage;
