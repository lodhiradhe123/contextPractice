import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/Context'

function UserDetails() {

    const {user}=useContext(UserContext);
    const navigate =useNavigate()
    const {id}=useParams()
    console.log(user[id]);
 const goBack = ()=>{
     navigate("/User");
 }

  return (
    <div className='m-10'>
        <h1>User Details</h1>
        <h1>{user[id].name}</h1>

        {/* <p>name:{user.map((data)=>data.id==id)}</p> */}
        <button className='px-2 py-1 rounded-md bg-blue-500 capitalize mt-9' onClick={goBack}> go back </button>

    </div>
  )
}

export default UserDetails