import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout"
// import { ReactComponent as AddToBasketIcon } from '../images/shopping-basket.png'

export default function Products() {

  const [shoes, setShoes] = useState([])
  const [basket, setBasket] = useState([])

  useEffect(() => {
    loadShoes();
  }, []);

  const loadShoes = () => {
    fetch("http://localhost:4000/shoes")
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log("shoes loaded!", json.shoes)
      setShoes(json.shoes)
    })
  }

  // const blackShoes = shoes.filter(shoe => shoe.model !== 'Black')

  return (
    <Layout basket={basket}>
      <div>
      <ul className="shoe-container">
      {shoes.map(function(shoe, index){
        return (
          <li className="shoe" key={index}>
          <div>
          <h2 className="sub-title">{shoe.model}</h2>
          </div>
          <img src={shoe.imgUrl}>
          {/* <AddToBasketIcon alt="add-to-basket-icon" /> */}
          </img>
          <p><strong>£{shoe.price}</strong></p>
          </li>
        )
      })}
      </ul>
      </div>
    </Layout>
  )
}
