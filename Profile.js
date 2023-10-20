import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Profile() {
  return (
   <> 
   <div className='m-5'>
    <Link to={"number"}>
    <button className='btn btn-sm btn-primary'>Number</button>
    </Link>
    </div>
   <Outlet/>
   </>
  )
}

export default Profile