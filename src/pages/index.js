import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import { Helmet } from 'react-helmet'

export default function Home() {

  return (
    <Layout>
      <section className={header}>
        <div className="home">
          <Helmet><title>{'Will Cowen'}</title></Helmet>
          <h2>Will Cowen</h2>
          <h3>Full Stack Developer, based in Bristol, UK.</h3>
          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
      </section>
      <div className="intro">
        <img src='./coder-sketch.png' alt="coder-sketch"/>
        <p className="quote"><em>“First, solve the problem. Then, write the code.”</em></p>
      </div>
    </Layout>
  )
}
