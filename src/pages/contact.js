import React from "react"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <h2 className="title">Talk</h2>
      <div class="wrapper">
        <div class="container">
          <form
            action="https://formsubmit.co/1f3d26d30647e073aa8afd8c9dad0ae9"
            method="POST"
          >
            <h4>Name</h4>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              required
            />
            <h4>Email</h4>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email.."
              required
            />
            <h4>Phone</h4>
            <input
              type="number"
              id="number"
              name="phone"
              placeholder="Your phone number.."
            />
            <h4>Enquiry</h4>
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
