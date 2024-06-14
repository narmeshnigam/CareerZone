import React, { useState, useEffect } from "react";
import styles from "./UserListsPage.module.css";
import db from "../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const UserListsPage = () => {
  const [users, setUsers] = useState([]);

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

  const handleDeleteUser = async (userId) => {
    // Ask for confirmation before deleting
    const confirmResult = await Swal.fire({
      title: "Delete User",
      text: "Are you sure you want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmResult.isConfirmed) {
      try {
        await db.collection("users").doc(userId).delete();
        setUsers(users.filter((user) => user.id !== userId));
        console.log("User deleted successfully:", userId);
        Swal.fire("Deleted!", "User has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting user:", error);
        Swal.fire("Error!", "There was an error deleting the user.", "error");
      }
    }
  };

  const handleEditUser = (user) => {
    MySwal.fire({
      title: "Edit User",
      html: `
        <div class="swal2-form-container">
          <label class="swal2-label" style="display: inline-block; width: 100px;">Name:</label>
          <input id="swal-input1" class="swal2-input" style="width: calc(100% - 300px);" value="${
            user.name
          }">
          <br>
          <label class="swal2-label" style="display: inline-block; width: 100px;">Email:</label>
          <input id="swal-input2" class="swal2-input" style="width: calc(100% - 300px);" value="${
            user.email
          }">
          <br>
          <label class="swal2-label" style="display: inline-block; width: 100px;">Phone:</label>
          <input id="swal-input3" class="swal2-input" style="width: calc(100% - 300px);" value="${
            user.phone
          }">
          <br>
          <label class="swal2-label" style="display: inline-block; width: 100px;">Role:</label>
          <input id="swal-input4" class="swal2-input" style="width: calc(100% - 300px);" value="${
            user.role
          }">
          <br>
          <label class="swal2-label" style="display: inline-block; width: 100px;">Approval Status:</label>
          <select id="swal-input5" class="swal2-input" style="width: calc(100% - 300px);">
            <option value="approved" ${
              user.approvalStatus === "approved" ? "selected" : ""
            }>Approved</option>
            <option value="pending" ${
              user.approvalStatus === "pending" ? "selected" : ""
            }>Pending</option>
            <option value="rejected" ${
              user.approvalStatus === "rejected" ? "selected" : ""
            }>Rejected</option>
          </select>
          <br>
          <label class="swal2-label" style="display: inline-block; width: 100px;">Password:</label>
          <input id="swal-input6" class="swal2-input" type="text" style="width: calc(100% - 300px);" value="${
            user.password
          }">
        </div>
      `,
      width: 800,
      customClass: {
        container: "swal2-container",
        popup: "swal2-popup",
        header: "swal2-header",
        title: "swal2-title",
        closeButton: "swal2-close",
        icon: "swal2-icon",
        image: "swal2-image",
        content: "swal2-content",
        input: "swal2-input",
        actions: "swal2-actions",
        confirmButton: "swal2-confirm",
        cancelButton: "swal2-cancel",
        footer: "swal2-footer",
      },
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: () => {
        const name = document.getElementById("swal-input1").value;
        const email = document.getElementById("swal-input2").value;
        const phone = document.getElementById("swal-input3").value;
        const role = document.getElementById("swal-input4").value;
        const approvalStatus = document.getElementById("swal-input5").value;
        const password = document.getElementById("swal-input6").value;

        return { name, email, phone, role, approvalStatus, password };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await db.collection("users").doc(user.id).update(result.value);
          setUsers((prevState) =>
            prevState.map((u) =>
              u.id === user.id ? { ...u, ...result.value } : u
            )
          );
          Swal.fire("Saved!", "User details have been updated.", "success");
        } catch (error) {
          console.error("Error updating user:", error);
          Swal.fire("Error!", "There was an error updating the user.", "error");
        }
      }
    });
  };

  return (
    <div className={styles.createUserLists__container}>
      <div className={styles.userLists_tab_heading}>User Lists</div>
      <div className={styles.userLists__tab}>
        <table className={styles.userTable}>
          <thead>
            <tr>
              <th>S.NO.</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Approval Status</th>
              <th>Password</th>
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
                <td>{user.approvalStatus}</td>
                <td>{user.password}</td>
                <td>
                  <div className="editBtn" onClick={() => handleEditUser(user)}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                </td>
                <td>
                  <div
                    className="deleteBtn"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListsPage;
