import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout"

export default function Products() {
  
  const [shoes, setShoes] = useState([])

  useEffect(() => {
    loadShoes();
  }, []);

  const loadShoes = () => {
    fetch("http://localhost:4000/shoes")
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log("shoes loaded!", json)
      setShoes(json.inventory)
    })
  }

  return (
    <Layout>
      <div>
      <ul className="shoe-container">
      {shoes.map(function(shoe, index){
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
      </div>
    </Layout>
  )
}
