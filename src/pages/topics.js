import React from "react"
import { useRouteMatch, Link } from "react-router-dom"

const Topics = () => {
  const match = useRouteMatch()
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        <li>
          <Link to={`${match.url}/music`}>Music</Link>
        </li>
        <li>
          <Link to={`${match.url}/coding`}>Coding</Link>
        </li>
      </ul>
    </div>
  )
}

export default Topics
