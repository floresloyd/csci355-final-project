/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useRef } from "react";
import { jobDataBase } from "../FirebaseClient"; 
import { collection, addDoc } from "firebase/firestore";


function JobForm({ onClose, userId }) {
  const formRef = useRef(null);
  const userid = userId;
  console.log("TEST:" + userid)


  // Handles adding a new job to the database
  const handleSubmit = async (event) => {
    // Instantiate variables for the db
    event.preventDefault(); // Prevent default action of forms to submit and re-render page
    const { role, employer, postinglink, contact, status } = formRef.current;
    const dateapplied = new Date().toISOString().slice(0, 10); // Formats current date as YYYY-MM-DD


    try {
      await addDoc(collection(jobDataBase, "jobs"), {
        role: role.value,
        employer: employer.value,
        postinglink: postinglink.value,
        contact: contact.value,
        dateapplied,
        status: status.value,
        userid
      });
      onClose(); // Close the form modal on successful addition
      alert("Job Added Successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
      
    


  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <button type="button" onClick={onClose}>Close</button>
      <h1>Job Form</h1>
      <input name="role" placeholder="Role" required />
      <input name="employer" placeholder="Employer" required />
      <input name="postinglink" placeholder="Posting Link" required />
      <input name="contact" placeholder="Contact" required />
      <input name="status" placeholder="Status" required />
      <button type="submit">Add Job</button>
    </form>
  );
}
  
  export default JobForm;