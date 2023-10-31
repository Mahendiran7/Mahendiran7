import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function StudentView() {
  const params = useParams();
  const [studentdetails, setstudentdetails] = useState({});
  console.log(params.id);
  const fetchstudentdetails = () => {
    axios
      .get(`https://653f760e9e8bd3be29e09edc.mockapi.io/Students/${params.id}`).then((res) => {
        if (res.status === 200) {
          setstudentdetails(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchstudentdetails();
  }, []);
  return (
    <div className="container">
      <div>
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Name:{studentdetails.firstname} {studentdetails.lastname}</h5>
            <h6>Email:{studentdetails.email}</h6>
            <h6>Location:{studentdetails.location}</h6>
            <h6>Hobbies:{studentdetails?.hobbies?.join(',')}</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to={'/student'}>
            <a href="#" class="btn btn-primary">
              Back
              </a></Link
            >
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentView;
