import React, { useState } from 'react'
import toast from 'react-hot-toast'

function Form() {
    const [student, setstudent]= useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    })

   const handlechange = (e) =>{
    setstudent({...student,[e.target.name]:e.target.value}) }

    const handlesubmit = ()=>{
        if(student.firstname===""){
            toast.error("firstname required")
            return
        }
        if(student.lastname===""){
            toast.error("lastname required")
            return
        }
        if(student.email===""){
            toast.error("email required")
            return
        }
        if(student.password===""){
            toast.error("password required")
            return
        }
        toast.success("form submited")
        console.log(student)
    }
   
  return (
    <div className="container mt-5 w-50">
        <h2>Create student</h2>
        <div className='row'>
            <div className='col-6'>
                <lable class="form-lable">first name</lable>
                <input type="text" class="form-control" name='firstname' onChange={(e)=>handlechange(e)}></input>
            </div>
            <div className='col-6'>
                <lable class="form-lable">Last name</lable>
                <input type='text'class="form-control" name="lastname" onChange={(e)=>handlechange(e)}></input>
            </div>
            <div className='col-6'>
                <lable class="form-lable">Email</lable>
                <input type='email' class="form-control"  name="email" onChange={(e)=>handlechange(e)}></input>
            </div>
            <div className='col-6'>
                <lable class="form-lable">Password</lable>
                <input type='password' class="form-control"  name="password" onChange={(e)=>handlechange(e)}></input>
            </div>
        </div>
        <div className='text-end mt-3'>
            <button className='btn btn-sm btn-outline-success' onClick={()=>handlesubmit()}>Submit</button>
        </div>
     </div>
  )
}

export default Form