import React from "react"
import { useParams } from "react-router-dom"

const Topic = () => {
  const { topicId } = useParams()
  return (
    <div>
      <h1>{topicId}</h1>
    </div>
  )
}

export default Topic
