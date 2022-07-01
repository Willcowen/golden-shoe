import React, { useState } from "react"
import Layout from "../../components/Layout"

export default function Basket({basket}) {
  return (
    <Layout>
      <ul className="shoe-container">
      {basket.map(function(shoe, index){
        return (
          <li className="shoe" key={index}>
          <div>
          <h2 className="sub-title">{shoe.model}</h2>
          </div>
          <img src={shoe.imgUrl} />
          <p><strong>£{shoe.price}</strong></p>
          </li>
        )
      })}
      </ul>
    </Layout>
  )
}
