import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
function Form() {
  const navigate = useNavigate()
  const [student, setstudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    location:"",
    hobbies:[],
  });

  const locationoption = [
    {label:"chennai",value:"chennai"},
    {label:"covai",value:"covai"},
    {label:"trichy",value:"trichy"},
    {label:"madurai",value:"madurai"}
  ]

  const hobbiesoption =[
    
       {label:"cricket",value:"cricket"},
       {label:"drawing",value:"drawing"},
       {label:"reading",value:"reading"},
       {label:"movies",value:"movies"}
    
  ]

  const [list, setlist] = useState([]);
  const handlechange = (e) => {
    // console.log(e.target.name,e.target.value);
    setstudent({ ...student, [e.target.name]: e.target.value });
  };
  const handlesubmit = () => {
    if (student.firstname === "") {
      toast.error("firstname required");
      return;
    }
    if (student.lastname === "") {
      toast.error("lastname required");
      return;
    }
    {
      if (student.email ==="") {
        toast.error("email required");
        return;
      }
      {
        if (student.password ==="") {
          toast.error("password required");
          return;
        }
      }
      {
        if (student.location==="")
        {toast.error("location required");
      return;
        }
      }
      {
        if (student.hobbies.length<=0) {
          toast.error("hobbies required");
          return;
        }
      }
    }
    axios.post("https://653f760e9e8bd3be29e09edc.mockapi.io/Students",student).then((res)=>{
      if(res.status===201){
        console.log(res);
      toast.success("form submited");
      setstudent({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        location:"",
        hobbies:[],
      });
      setlist([...list, student]);
      navigate("/student")

      }

      
    }).catch((error)=>{
      console.log(error);
    })
   
   
  };
 
  return (
    <>
      <div className="container mt-5 w-50">
        <h2>Create student</h2>
        <div className="row">
          <div className="col-6">
            <lable class="form-lable">first name</lable>
            <input
              type="text"
              class="form-control"
              name="firstname"
              value={student.firstname}
              onChange={(e) => handlechange(e)}
            />
          </div>
          <div className="col-6">
            <lable class="form-lable">Last name</lable>
            <input
              type="text"
              class="form-control"
              name="lastname"
              value={student.lastname}
              onChange={(e) => handlechange(e)}
            ></input>
          </div>
          <div className="col-6">
            <lable class="form-lable">Email</lable>
            <input
              type="email"
              class="form-control"
              name="email"
              value={student.email}
              onChange={(e) => handlechange(e)}
            ></input>
          </div>
          <div className="col-6">
            <lable class="form-lable">Password</lable>
            <input
              type="password"
              class="form-control"
              name="password"
              value={student.password}
              onChange={(e) => handlechange(e)}
            ></input>
          </div>
          <div className="col-6">
            <lable class="form-lable">location</lable>
            <Select options={locationoption} value={locationoption.filter((op)=>op.value===student.location)} onChange={(e)=>setstudent({...student,location:e.value})}/>
          </div>
          <div className="col-6">
            <lable class="form-lable">Hobbies</lable>
            <Select isMulti options={hobbiesoption} value={hobbiesoption.filter((op)=>{return student.hobbies.some((pt)=>op.value===pt)})} onChange={(e)=>setstudent({...student,hobbies:e.map((hobby)=>hobby.value)})}/>
          </div>
        </div>
        <div className="col-6">
            <div>
                <input type="radio" onChange={(e)=>console.log(e)}/>
                <label>Male</label>
            </div>
            <div>
                <input type="radio"></input>
                <label>Female</label>
            </div>
        </div>
        
        <div className="text-end mt-3">
          <button
            className="btn btn-sm btn-outline-success"
            onClick={() => handlesubmit()}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="container mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Location</th>
              <th scope="col">Hobbies</th>
             
            </tr>
          </thead>
          <tbody>
            {list.map((student, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{student.firstname}</td>
                  <td>{student.lastname}</td>
                  <td>{student.email}</td>
                  <td>{student.password}</td>
                  <td>{student.location}</td>
                  <td>{student.hobbies.join(",")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Form;
