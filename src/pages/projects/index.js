import React from 'react'
import Layout from '../../components/Layout'
import { portfolio } from '../../styles/projects.module.css'
import WMProject from './WMProject'

export default function Projects() {
  return (
    <Layout>
    <div className={portfolio}>
      <h2>My Projects</h2>
    </div>
    <div className="projects">
      <WMProject />
      </div>
    </Layout>
  )
}
