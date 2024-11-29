import React, { useContext } from 'react'
import Navbar from '../../pages/Navbar'
import AppContext from '../../context/AppContext'

function Profile() {

    const{user} =useContext(AppContext)
  return (
    <>
    <Navbar/>

    <div className="container text-center">

        <h1>welcome, {user?.name}</h1>
        <h2>{user?.email}</h2>
    </div>
    </>
  )
}

export default Profile       