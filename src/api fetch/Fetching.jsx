import React from 'react'
import { useState, useEffect } from 'react'

function Fetching(){
    
    const[users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((data)=> setUsers(data))
        .catch((error)=> console.log(error))
    },[])
  return (
    <>
    <h1>Users</h1>
    <ol>
        {users.map((user)=>(
            <>
            <li key={user.id}>{user.name}</li>
            <p>{user.email}</p>
            </>
        ))}
    </ol>
    </>

  )
}

export default Fetching