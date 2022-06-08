import { Link } from "gatsby"
import React from "react"

export default function NavBar() {
  return (
    <nav className="topnav">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
