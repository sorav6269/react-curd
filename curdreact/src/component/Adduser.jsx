import React,{useState} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';
import toast  from 'react-hot-toast';

function Adduser() {
    const [name,setname] = useState('');
    const [email,setemail] = useState('')
   const navigate = useNavigate()

const submitdata = async (e)=>{
    e.preventDefault()
        // console.log(name,email)
        try {
            const {data} = await axios.post("http://localhost:4000/api/studentInsert",{name,email});
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
<div className='container mt-5'  style={{width:'40%'}}>
    <div className='card p-5'style={{boxShadow:"0 0 0 5px ",backgroundColor:"beige"}}>
    <h1 className='bg-info text-center'> Add User</h1>
    <form onSubmit={submitdata} >
        <div className='mb-3'>
            <label htmlFor="">Name</label>
            <input type="text"value={name}  onChange={(e)=>setname(e.target.value)} className='form-control'/>
        </div>
        <div className='mb-3'>
            <label htmlFor="">Email</label>
            <input type="email" value={email}  onChange={(e)=>setemail(e.target.value)} className='form-control'/>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
</div>
</div>
</>
  )
}

export default Adduser