import React, { useState } from "react";

function Table() {
  const [firstname,setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const formsubmit =()=>{
    if(firstname.length<4) {
      alert("minimum 4 letters required")
      return
    }
    
    if(firstname===""){
      alert("firstname required")
      return
    }
    if(lastname==="") {
      alert("minimum 4 letters required")
      return
    }
    if (lastname===""){
        alert("lastname required")
      return
    }
    if (email==="") {
      alert("email required")
      return
    }
    
    if (password===""){
      alert("password required")
      return
    }
    console.log({
    firstname:firstname,
    lastname:lastname,
    email:email,
    password:password

  });
  }
  return (
  <div className="container w-50 mt-5">
    <h2>Student Form</h2>
    <div className="row">
      <div className="col-6">
        <label class="form-lable">First name</label>
        <input 
        type="text"
        class="form-control"
        name="Firrst name"
        onChange={(event)=> setfirstname(event.target.value)}
        />
      </div>
      <div className="col-6">
        <label class="form-lable">Last name</label>
        <input 
        type="text"
        class="form-control"
        onChange={(event)=> setlastname(event.target.value)}
        />
      </div>
      <div className="col-6">
        <label class="form-lable">Email</label>
        <input 
        type="email"
        class="form-control"
        onChange={(event)=>setemail(event.target.value)}
        />
      </div>
      <div className="col-6">
        <label class="form-lable">Password</label>
        <input 
        type="password"
        class="form-control"
        onChange={(event)=>setpassword(event.target.value)}
        />
      </div>
      <div className="text-end mt-3" >
        <button className="btn btn-sm btn-outline-success" onClick={()=>formsubmit()}>Submit</button>
      </div>

    </div>
  </div>
  );
}

export default Table;
