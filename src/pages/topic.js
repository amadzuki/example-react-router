import React from "react"
import { useParams } from "react-router-dom"
import topics from "../data/topics.json"

const Topic = () => {
  // play-with-cats from slug /topics/play-with-cats
  const { topicId } = useParams()

  const { title } = topics.find((topic) => topic.slug === topicId)

  return (
    <div>
      <h1>{title}</h1>

      <p>Description</p>
    </div>
  )
}

export default Topic
