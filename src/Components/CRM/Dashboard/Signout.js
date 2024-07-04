// signOut.js
import { auth } from "../../../firebase"; // Adjust the import path as necessary

const signOutUser = (navigate) => {
  const user = auth.currentUser;
  const userId = user ? user.uid : "Unknown User";
  auth
    .signOut()
    .then(() => {
      console.log(`User ${userId} signed out successfully.`);
      navigate("/"); // Navigate to home page
    })
    .catch((error) => {
      console.error("Error signing out: ", error);
    });
};

export default signOutUser;
