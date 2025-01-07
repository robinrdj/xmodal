import './App.css';
import React,{useState} from "react";

function App() {
  const [username, setUsername] = useState("");
  const [emailaddress, setEmailaddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(phonenumber.length!==10){
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    if(new Date(dateOfBirth)>new Date()){
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }
    console.log("submitted successfully");
  }

  return (
<div className="modal" >
      <h1>User Details Modal</h1>
      <button onClick={()=>{setVisible(!visible)}}>Open Form</button>
      {visible && (
 <div onClick={()=>{setVisible(false)}} className="modal-back">
 <div className="modal-content"  onClick={(e)=>{e.stopPropagation()}}>
 <form onSubmit={handleSubmit}>
   <label>Username</label>
   <input type="text" id = "username" name="username" value = {username} onChange={(e)=>{setUsername(e.target.value)}} required/>
   <label>Email Address</label>
   <input type="email" id = "email" name="emailaddress" value = {emailaddress} onChange={(e)=>{setEmailaddress(e.target.value)}}/>
   <label>Phone Number</label>
   <input type="number" id = "dob" name="phonenumber" value = {phonenumber} onChange={(e)=>{setPhonenumber(e.target.value)}}/>
   <label>Date of Birth</label>
   <input type="date" id="phone" name="dateOfBirth" value = {dateOfBirth} onChange={(e)=>{setDateOfBirth(e.target.value)}}/>
   <button type="submit">Submit</button>
 </form>
 </div>
 </div>
      )}
</div>
  );
}

export default App;
