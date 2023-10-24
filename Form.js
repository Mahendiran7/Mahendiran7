import React, { useState } from 'react'
import toast from 'react-hot-toast'

function Form() {
    const [student, setstudent]= useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    })
    const [list,setlist] = useState([])
   const handlechange = (e) =>{
   // console.log(e.target.name,e.target.value);
   setstudent({...student,[e.target.name]:e.target.value})
 }
 const handlesubmit = ()=>{
    if(student.firstname===""){
        toast.error("firstname required")
        return
    }
    if(student.lastname===""){
        toast.error("lastname required")
        return
    }
    {
        if(student.email===""){
            toast.error("email required")
            return
        }
        {
            if(student.password===""){
                toast.error("password required")
                return
            }
        }
    }
    toast.success("form submited")
    setstudent({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    })
    setlist([...list,student])
    
 }
 console.log(list);
  return (
    <>
    <div className="container mt-5 w-50">
        <h2>Create student</h2>
        <div className='row'>
            <div className='col-6'>
                <lable class="form-lable">first name</lable>
                <input type="text" class="form-control" name="firstname" value={student.firstname} onChange={(e)=>handlechange(e)}/>
            </div>
            <div className='col-6'>
                <lable class="form-lable">Last name</lable>
                <input type='text'class="form-control" name="lastname" value={student.lastname} onChange={(e)=>handlechange(e)} ></input>
            </div>
            <div className='col-6'>
                <lable class="form-lable">Email</lable>
                <input type='email' class="form-control" name="email" value={student.email} onChange={(e)=>handlechange(e)}  ></input>
            </div>
            <div className='col-6'>
                <lable class="form-lable">Password</lable>
                <input type='password' class="form-control" name="password" value={student.password} onChange={(e)=>handlechange(e)} ></input>
            </div>
        </div>
        <div className='text-end mt-3'>
            <button className='btn btn-sm btn-outline-success' onClick={()=>handlesubmit()}>Submit</button>
        </div>
     </div>
     <div className='container mt-5'>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Email</th>
      <th scope='col'>Password</th>
    </tr>
  </thead>
  <tbody>
    {
        list.map((student,i)=>{
            return <tr>
                <td>{i+1}</td>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.email}</td>
                <td>{student.password}</td>
            </tr>
        })
    }
 
  </tbody>
</table>
     </div>
     </>
  )
}

export default Form