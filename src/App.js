import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Navigation from "./components/Navigation"

import Home from "./pages/home"
import About from "./pages/about"
import Users from "./pages/users"
import Topics from "./pages/topics"
import Topic from "./pages/topic"

const App = () => {
  return (
    <Router>
      <div>
        <Navigation></Navigation>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/topics" exact>
            <Topics />
          </Route>
          <Route path="/topics/:topicId">
            <Topic />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
