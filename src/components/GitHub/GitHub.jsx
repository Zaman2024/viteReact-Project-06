import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data, setData] = useState([])

    useEffect(() =>{
        fetch('https://api.github.com/users/Zaman2024')
        .then(res => res.json())
        .then(data =>{setData(data)})
        
    }, [])
  return (
    <div className='flex justify-center flex-col items-center bg-slate-500 mx-32 rounded-lg bg-opacity-10'>
      <h1 className='w-full text-center m-4'>GitHub Followers : {data.followers}</h1>
      <img className='my-3' src={data.avatar_url} alt="Image" />
    </div>
  )
}

export default GitHub
