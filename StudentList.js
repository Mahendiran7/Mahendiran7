import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function StudentList() {
  const [student, setstudent] = useState([]);
  const [loading, setloading] = useState(true)
  const navigate =  useNavigate()
  const fetchStudentlist = () => {
    axios
      .get("https://653f760e9e8bd3be29e09edc.mockapi.io/Students")
      .then((res) => {
        setstudent(res.data);
        setloading(!loading)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchStudentlist();
  }, []);
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
      <h3>Student List</h3>
      <button className="btn btn-sm btn-outline-primary" onClick={()=>navigate('/form')}>Create Student</button>
      </div>
      <div className="container mt-4">
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
              <th scope="col">Action</th>
              
            </tr>
          </thead>
          <tbody>
            {
              loading?<div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>:
              student.map((list,i)=>{
                return <tr>
                <td>{i + 1}</td>
                <td>{list.firstname}</td>
                <td>{list.lastname}</td>
                <td>{list.email}</td>
                <td>{list.password}</td>
                <td>{list.location}</td>
                <td>{list.hobbies}</td>
               <td> <button className="btn btn-sm btn-outline-primary" onClick={()=>navigate(`/student/${list.id}`)}>View</button>
                <button className="btn btn-sm btn-outline-warning">Edit</button>
                <button className="btn btn-sm btn-outline-danger">Delete</button>
                </td>
              </tr>
              })
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
