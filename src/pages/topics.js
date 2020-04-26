import React from "react"
import { useRouteMatch, Link } from "react-router-dom"

import topics from "../data/topics.json"

const Topics = () => {
  const match = useRouteMatch()
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map((topic, index) => {
          return (
            <li key={index}>
              <Link to={`${match.url}/${topic}`}>{topic}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Topics
