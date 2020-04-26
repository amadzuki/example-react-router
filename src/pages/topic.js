import React from "react"
import { useParams } from "react-router-dom"

const Topic = () => {
  const { topicId } = useParams()
  return <div>Topic: {topicId}</div>
}

export default Topic
