import React from 'react'
import Navbar from './NavBar'
import '../styles/global.css'

export default function Layout({children}) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
          { children }
      </div>
      <footer>
          <p>Copyright 2022 William Cowen</p>
    </footer>
    </div>
  )
}