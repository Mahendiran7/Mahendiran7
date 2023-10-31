import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverHeader,
} from "reactstrap";
function StudentList() {
  const [student, setstudent] = useState([]);
  const [loading, setloading] = useState(true);
  const [deleteId, setdeleteId] = useState("");
  const [editmodal,seteditmodal]= useState(false);
  const navigate = useNavigate();
  const fetchStudentlist = () => {
    axios
      .get("https://653f760e9e8bd3be29e09edc.mockapi.io/Students")
      .then((res) => {
        setstudent(res.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchStudentlist();
  }, []);

  const handledelete = (id) => {
    console.log(id);
    if (id === undefined) {
      return toast.error("Id Required");
    }
    axios
      .delete(`https://653f760e9e8bd3be29e09edc.mockapi.io/Students/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Deleted SuccessFully");
          fetchStudentlist();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        <h3>Student List</h3>
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => navigate("/form")}
        >
          Create Student
        </button>
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
            {loading ? (
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              student.map((list, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{list.firstname}</td>
                    <td>{list.lastname}</td>
                    <td>{list.email}</td>
                    <td>{list.password}</td>
                    <td>{list.location}</td>
                    <td>{list.hobbies.join(",")}</td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => navigate(`/student/${list.id}`)}
                      >
                        View
                      </button>
                      <button className="btn btn-sm btn-outline-warning" onClick={()=>seteditmodal(!editmodal)}>
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        id={`popover-${i}`}
                        onClick={() => setdeleteId(list.id)}
                      >
                        Delete
                      </button>
                      <Popover
                        target={`popover-${i}`}
                        isOpen={list.id === deleteId}
                      >
                        <PopoverHeader>Are you Sure?</PopoverHeader>
                        <h5>Do you want to delete permenently?</h5>
                        <div>
                          <button
                            className="btn btn-sm btn-outline-primary mx-3"
                            onClick={() => handledelete(list.id)}
                          >
                            Yes
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger mx-3"
                            onClick={() => setdeleteId("")}
                          >
                            No
                          </button>
                        </div>
                      </Popover>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <Modal isOpen={editmodal}>
        <ModalHeader>Edit Student</ModalHeader>
        <ModalBody>changes</ModalBody>
        <ModalFooter>
          <div>
            <button className="btn btn-sm btn-outline-primary mx-3">
              Update
            </button>
            <button className="btn btn-sm btn-outline-danger mx-3">
              Cancel
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default StudentList;
