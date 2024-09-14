import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import toast from 'react-hot-toast';
function EditUser() {
  const [name,setname] =useState('');
  const [email,setemail] = useState('')
 const navigate = useNavigate()
const {id} = useParams()
useEffect(()=>{
          
        axios.get(`http://localhost:4000/api/studentview/${id}`)
          .then((response)=>{
               setname(response.data.name)
               setemail(response.data.email)
          })

      .catch((error)=> {
          console.log(error)
      })
    },[id])
    // console.log(name,email)
 
    const UpdateData = async (e) =>{
      e.preventDefault()
      // console.log(name,email)
      try {
        const {data} = await axios.put(`http://localhost:4000/api/studentupdate/${id}`,{name,email});
        // console.log(data)
        toast.success(data.message)
        setname("")
        setemail("")
        navigate('/')
    } catch (error) {
        toast.error(error.response.data.message)
        console.log(error)
    }
    }

  return (
    <>
    <div className='container mt-5' style={{width:'40%'}}>
    <div className='card p-5'style={{boxShadow:"0 0 0 5px black",backgroundColor:"beige"}}>
        <h1 className='bg-info text-center'> Add User</h1>
        <form onSubmit={UpdateData} >
            <div className='mb-3'>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className='form-control'/>
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default EditUser