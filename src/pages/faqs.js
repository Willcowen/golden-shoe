import React from "react"
import Layout from "../components/Layout"

export default function FAQs() {
  return (
    <div>
      <Layout>
        <h2 className="sub-title">FAQ's</h2>
        <div className="faqs">
         <div className="delivery">
          <h3>Delivery</h3>
          <h4>How long will delivery take & how much will it cost?</h4>
          <p>It’s up to you! We believe in giving you options so you can decide on cost, speed and convenience – we’ve got a delivery option to suit everyone’s needs, including weekend delivery.</p>
          <h4>Can I choose a date for delivery?</h4>
          <p>Yes! We’ve got a delivery option to suit everyone’s needs, including weekend delivery. </p>
         </div>
         <div className="returns">
          <h3>Returns</h3>
          <h4>What if the shoes don't fit me?</h4>
          <p>We stock LOTS of different brands and – just like clothing – they sometimes vary in their sizing. If you receive your shoes and they’re not an ideal fit, you can return the item, in an unused condition, to receive an exchange or refund.</p>
          </div>
        </div>
      </Layout>
    </div>
  )
}
