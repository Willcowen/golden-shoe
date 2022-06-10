import React from "react"
import Layout from "../components/Layout"
import { header } from "../styles/home.module.css"

export default function About() {
  return (
    <Layout>
      <section className={header}>
      <div className="about">
      <h2>Me</h2>
      <h3 className="about-subheading">Hello and welcome to my website.</h3>
      </div>
      </section>
      <div className="about-body">
        <div className="about-me">
        <p>
          My name is Will and I am a full stack
          software developer from the UK.
        </p>
        <p>
          I love to write code and I especially love to solve problems with
          code. I spend most of my time in front of a computer and I’ve always
          had a huge passion for technology. Recently, I graduated from a Full
          Stack Software Development course at Boolean UK. Previous to this, I
          studied music performance and the British and Irish Institute of
          Modern Music in Fulham, West London. On completion, I went on to tour
          and play with an Artist called Pixel Fix.
        </p>
        <p>
          With the knowledge I have gained, I hope to go on and combine my love
          for arts and creativity with the problem solving aspects of writing
          code.
        </p>
        </div>
        <img src="./me-new-cartoon.jpg" alt="will" className="picture-of-me" />
      </div>
    </Layout>
  )
}
