import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"

export default function Products() {
  const [shoes, setShoes] = useState([])
  const [filter, setFilter] = useState("none")

  useEffect(() => {
    loadShoes()
  }, [])

  const loadShoes = () => {
    fetch("http://localhost:4000/shoes")
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        console.log("shoes loaded!", json.shoes)
        setShoes(json.shoes)
      })
  }

  const compare = (a, b) => {
    if (a.model < b.model) {
      return -1
    }
    if (a.model > b.model) {
      return 1
    }
    return 0
  }

  const sortByPrice = shoes => shoes.sort((a, b) => a.price - b.price)

  const sortAlphabetically = shoes => shoes.sort(compare)


  let filteredShoes = shoes
  if (filter === 'a-z') {
    filteredShoes = sortAlphabetically(shoes)
  }
  if (filter === 'price') {
    filteredShoes = sortByPrice(shoes)
  }


  return (
    <Layout>
      <div>
        <div className="filters">
        <label htmlFor="filters">Sort by..</label>
        <select
          id="filter-options"
          name="filters"
          onChange={option => setFilter(option.target.value)}
        >
          <option value="none">None</option>
          <option value="a-z">A-Z</option>
          <option value="price">Price</option>
        </select>
        </div>
        <h2 className="title">Men's Shoes</h2>
        <ul className="shoe-container">
          {filteredShoes.map(function (shoe, index) {
            return (
              <li className="shoe" key={index}>
                <div>
                  <h2 className="sub-title">{shoe.model}</h2>
                </div>
                <img className="shoe-img" src={shoe.imgUrl} />
                <p>
                  <strong>£{shoe.price}</strong>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}
