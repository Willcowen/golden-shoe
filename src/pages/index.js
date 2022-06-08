import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import { useEffect, useState } from 'react'

export default function Home() {

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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </Layout>
  )
}
