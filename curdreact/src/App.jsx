import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Adduser from './component/Adduser'
import {Routes,Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Dis from './component/Dis'
import ViewUser from './component/ViewUser'
import EditUser from './component/EditUser'

function App() {


  return (
    <>
    <Routes>
      <Route path='/Adduser' element={<Adduser/>} />
      <Route path='/' element={<Dis/>}/>
      <Route path='/ViewUser/:id' element={<ViewUser/>} />
      <Route path='/EditUser/:id' element={<EditUser/>} />

    </Routes>
    <Toaster/>
    </>
  )
}

export default App
