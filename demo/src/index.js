import React from "react"
import { render } from "react-dom"

import Login from "../../src/components/Login"

const buttons = ["google", "facebook", "linkedin", "orcid"]

const Demo = () => {
  return <Login buttons={buttons} />
}

render(<Demo />, document.querySelector("#demo"))
