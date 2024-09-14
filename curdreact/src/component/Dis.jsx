import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
function Dis() {
  const [user, setUser] = useState([])
  const fatchItems = async () => {
      try {
          const response = await axios.get("http://localhost:4000/api/studentDispaly")
          setUser(response.data)
      } catch (error) {
          console.log("error fatching items", error)
      }
  }
  console.log(user)

  useEffect(() => {
      fatchItems()
  }, [])

  const deleteuser = async (id) => {
    await axios.get(`http://localhost:4000/api/studentdelete/${id}`)
        .then((response) => {
            setUser(user.filter((item) => item._id !== id))
            toast.success(response.data.message)
        })
        .catch((error) => {
            console.log(error)
        })
}


    return (
      <>
      <div className="container mt-5" style={{ width: "40%" }}>
      <div className='card 'style={{boxShadow:"0 0 0 5px ",backgroundColor:"beige"}}>
      <Link to={"AddUser"} className="btn btn-info btn-lg mb-3">AddUser</Link>
      <h2 className="bg-info text-center">Display Data</h2>
      <table className="table text-center">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              {user.map((item, index) => (
                  <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td className="py-3">
                          <Link to={/ViewUser/ + item._id} className="btn btn-info btn-sm">
                          <i className="fa-solid fa-eye"></i>
                          </Link>
                          <Link to={/EditUser/ + item._id} className="btn btn-success btn-sm" style={{ margin: "0 10px" }}>
                              <i className="fa-solid fa-pen-to-square "></i>
                          </Link>
                          <button onClick={() => deleteuser(item._id)} className="btn btn-danger btn-sm">
                              <i className="fa-solid fa-trash"></i>
                          </button>
                      </td>
                  </tr>
              ))}
          </tbody>
      </table>
  </div>
  </div>

</>
  )
}

export default Dis