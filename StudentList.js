import axios from "axios";
import React, { useEffect, useState } from "react";

function StudentList() {
  const [student, setstudent] = useState([]);
  const [loading, setloading] = useState(true)
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
    <div className="container">
      <h3 className="mt-3">Student List</h3>
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
