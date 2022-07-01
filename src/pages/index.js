import React from "react"
import Layout from "../components/Layout"
import { Helmet } from 'react-helmet'

export default function Home() {

  return (
    <Layout>
      <Helmet><title>{'Golden Shoe'}</title></Helmet>
    </Layout>
  )
}
