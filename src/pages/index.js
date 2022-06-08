import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import { useEffect, useState } from 'react'

export default function Home() {

  const [displayQuote, setDisplayQuote] = useState('')

  useEffect(() => {
    fetch('https://zenquotes.io/api/random')
    .then(res => {
      console.log(res)
    })
  })
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Will Cowen</h2>
          <h3>Front End Developer, based in Bristol, UK.</h3>
          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
      </section>
      <div className="intro">
        <img src='./coder-sketch.png' />
        <p>{displayQuote}</p>
      </div>
    </Layout>
  )
}
