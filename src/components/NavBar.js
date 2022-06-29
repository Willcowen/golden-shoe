import { Link } from "gatsby"
import React from "react"

export default function NavBar() {
  return (
    <nav className="topnav">
      <div>
      <Link to="/"><h1 className="title">Golden Shoe</h1></Link>
      </div>
      <div className="links">
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Basket</Link>
      </div>
    </nav>
  )
}
