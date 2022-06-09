import React from "react"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <h2 className="title">Get in touch!</h2>
      <div class="wrapper">
      <div class="container">
        <form
          action="https://formsubmit.co/willcowendrums@gmail.com"
          method="POST"
        >
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            required
          />

          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email.."
            required
          />

          <label for="phone">Phone</label>
          <input
            type="number"
            id="number"
            name="phone"
            placeholder="Your phone number.."
          />

          <label for="subject">Enquiry</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            required
          ></textarea>

          <input type="submit" value="Send" />
        </form>
      </div>
      </div>
    </Layout>
  )
}
