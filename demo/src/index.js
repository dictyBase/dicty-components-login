import React, { Component } from "react"
import { render } from "react-dom"

import Login from "../../src/components/Login"

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <Login />
      </div>
    )
  }
}

render(<Demo />, document.querySelector("#demo"))
