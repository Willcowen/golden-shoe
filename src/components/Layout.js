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
    </div>
  )
}
