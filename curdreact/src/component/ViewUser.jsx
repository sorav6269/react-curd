import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function ViewUser() {
  const {id} = useParams();
const [user,setuser] = useState([])
useEffect(()=>{
    axios.get(`http://localhost:4000/api/studentview/${id}`)
    .then(response=>{
        setuser(response.data)
    }).catch((error) =>{
        console.log(error)
    })
},[id])
    return (
   <>
   <div className="container mt-5" style={{ width: "40%" }}>
   <div className='card p-5'style={{boxShadow:"0 0 0 5px ",backgroundColor:"beige"}}>
        <h2 className="bg-info text-center">Display Data</h2>
        <table className="table text-center">
          <thead>
            <tr>
             
              <th>Name</th>
              <th>Email</th>
              
            </tr>
          </thead>
          <tbody>
           <tr>
             
            <td>{user.name}</td>
            <td>{user.email}</td>
           </tr>
          </tbody>
        </table>
<div className="text-center">
           <Link to={"/"}>Back To Display Data</Link>
           </div>
</div>
           </div>
   </>
  )
}

export default ViewUser