import React from 'react'
import Body from './Body'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'

const HandleFooter = () => {
  return (
    <div>
         <Nav />
        
        <Outlet />
        <Footer />
    </div>
  )
}

export default HandleFooter