import { Link } from "gatsby"
import React from "react"

export default function NavBar() {
  return (
    <nav>
      <div className="logo-name">
        <img src="./mylogo.jpg" alt="logo" height="50"></img>
        <h1>William Cowen</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
