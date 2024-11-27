import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Project from './Project'
import MinorProject from './MinorProject'
import Skills from './Skills'
import Ranking from './Ranking'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
       
        <Main />
        <Project />
        <MinorProject />
        <Skills />
        <Ranking />
        
        
        
    </div>
  )
}

export default Body