import React from "react"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
          <ul>
            <li>
              <Link to="/topics/music">Music</Link>
            </li>
            <li>
              <Link to="/topics/coding">Coding</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
