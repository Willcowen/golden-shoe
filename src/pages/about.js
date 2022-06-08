import React from "react"
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <div className="about-body">
        <div className="about-me">
        <p>
          Hello and welcome to my website, my name’s Will and I am a full stack
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
