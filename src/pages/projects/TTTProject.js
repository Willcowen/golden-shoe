import React from "react"
import "../../styles/global.css"
import { portfolio } from "../../styles/projects.module.css"

export default function TTTProject() {
  return (
    <div className={portfolio}>
      <nav className="project-nav">
        <a
          className="links"
          href="https://github.com/Willcowen/tic-tac-toe"
          target="_blank"
          alt="tic-tac-toe-repo-link"
        >
          Repo
        </a>
        <a
          className="links"
          href="https://tic-tac-toe-will.netlify.app/"
          target="_blank"
          alt="tic-tac-toe-app-link"
        >
          App
        </a>
      </nav>
      <div className="project-body">
        <h4>Description</h4>
          This is a simple application I built in React, reproducing the logic
          behind a well known game.
        <h4>Challenges</h4>
        <li>
          One challenge with this was adding the logic for a virtual 'computer'
          opponent, and deciding how I would implement the logic for the
          computer taking turns.
        </li>
      </div>
      <div className="screenshots">
        <img
          src="./tic-tac-toe.png"
          alt="app-screenshot"
          className="app-screenshots"
        />
      </div>
    </div>
  )
}
