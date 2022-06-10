import React from "react"
import "../../styles/global.css"
import { portfolio } from "../../styles/projects.module.css"

export default function WMProject() {
  return (
    <div className={portfolio}>
      <nav className="project-nav">
        <a
          className="links"
          href="https://github.com/Willcowen/will-manage-client"
          target="_blank"
          rel="noreferrer"
          alt="will-manage-link"
        >
          Client Repo
        </a>
        <a
          className="links"
          href="https://github.com/Willcowen/will-manage-server"
          target="_blank"
          rel="noreferrer"
          alt="will-manage-link"
        >
          Server Repo
        </a>
        <a
          className="links"
          href="https://will-manage-client.netlify.app/"
          target="_blank"
          rel="noreferrer"
          alt="will-manage-link"
        >
          App
        </a>
      </nav>
      <div className="project-body">
        <h4 className="project-subtitles">Description</h4>
        <p>
          I have built a project management app called ‘will manage’, which
          allows users to keep track of tasks as they progress from start to
          completion. I wanted to give this a go as I knew it could make use of a
          new library, react-beautiful-dnd.{" "}
        </p>
        <h4 className="project-subtitles">Challenges</h4>
        <p>
          Learning a new library. (Limited useful tutorials out there on the
          library itself)
        </p>
        <p>
          Trying to keep the front end ‘in sync’ with the back end. Particularly
          when dragging an item from one list to another, as the index of item
          changes on more than element. So a patch request on multiple items was
          needed for the back end to stay in sync.
        </p>
      </div>
      <div className="screenshots">
        <img
          src="./app-main.png"
          alt="app-screenshot"
          className="app-screenshots"
        />
      </div>
    </div>
  )
}
