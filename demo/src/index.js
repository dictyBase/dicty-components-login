import React, { Component } from "react"
import { render } from "react-dom"

import Login from "../../src/components/Login"

class Demo extends Component {
  render() {
    return <Login />
  }
}

render(<Demo />, document.querySelector("#demo"))
