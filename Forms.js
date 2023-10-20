import React, { useState } from "react";

function Forms() {
    const [Firstname, setFirstname]= useState("")
   const [Lastname, setLastname]= useState("")
   const [Email,setEmail]= useState("")
   const [Password, setPassword]= useState("")
   const formsubmit = ()=>{
    if (Firstname===""){
        alert("first name is requaired")
        return
    }
    if(Firstname.length<4) {
        alert("Minimum 4 letters are required")
        return
    }
    if (Lastname===""){
        alert("last name is requaired")
        return
    }
    if(Lastname<4) {
        alert("Minimum 4 letters requered")
    }
    if (Email===""){
        alert("emailis requaired")
        return
    }
    if (Password===""){
        alert("password is requaired")
        return
    }
    console.log({
        firstname:Firstname,
        lastname:Lastname,
        email:Email,
        Password:Password
    });
   }
  return (
    <div className="container w-50 mt-5" >
        <h2>Student Form</h2>
      <div className="row">
        <div className="col-6">
          <label class="form-label">First name</label>
          <input
            type="text"
            class="form-control"
            onChange={(event)=>setFirstname(event.target.value)}
           />
        </div>
        <div className="col-6">
        <label class="form-label">Last name</label>
          <input
            type="text"
            class="form-control"
            onChange={(event)=>setLastname(event.target.value)}
           />
        </div>
        <div className="col-6">
        <label class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            onChange={(event)=>setEmail(event.target.value)}
           />
        </div>
        <div className="col-6">
        <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            onChange={(event)=>setPassword(event.target.value)}
           />
        </div>
      </div>
      <div className="text-end mt-3">
        <button className="btn btn-sm btn-outline-success" onClick={()=>formsubmit()}>Submit</button>
      </div>
    </div>
  );
}

export default Forms;
