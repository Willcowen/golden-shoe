import { Link } from "gatsby"
import React from 'react';
import ShoeIcon from '../images/shoe.svg'

export default function NavBar() {
  return (
    <nav className="topnav">
      <ShoeIcon height="80" width="80"/>
      <div>
      <Link to="/"><h1 className="title">Golden Shoe</h1></Link>
      </div>
      <div className="links">
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/basket">Basket</Link>
      </div>
    </nav>
  )
}
