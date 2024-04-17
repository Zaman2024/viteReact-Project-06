import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} =useParams();
  return (
    <div className='flex justify-center items-center bg-slate-700 p-5 mx-36 my-5 rounded-2xl'>Use : {userid}</div>
  )
}

export default User
