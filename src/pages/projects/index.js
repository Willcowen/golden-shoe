import React from "react"
import { useState } from "react"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/projects.module.css"
import WMProject from "./WMProject"
import TTTProject from "./TTTProject"

export default function Projects() {
  const [toggleProject, setToggleProject] = useState(true)

  return (
    <Layout>
      <div className={portfolio}>
        <h2>My Projects</h2>
        <div className="project-titles">
          <h3 className="project-title" onClick={() => setToggleProject(true)}>Will Manage</h3>
          <h3 className="project-title" onClick={() => setToggleProject(false)}>Tic-Tac-Toe</h3>
        </div>
      </div>
      <div className="projects">
        {toggleProject && <WMProject />}
        {!toggleProject && <TTTProject />}
      </div>
    </Layout>
  )
}
