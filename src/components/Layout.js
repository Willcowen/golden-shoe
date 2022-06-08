import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer.js'
import '../styles/global.css'

export default function Layout({children}) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
          { children }
      </div>
      <Footer className="footer" />
    </div>
  )
}
