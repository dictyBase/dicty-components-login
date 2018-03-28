import React from "react"
import { render } from "react-dom"

import Login from "../../src/components/Login"

// array of buttons to display
const buttons = ["google", "facebook", "linkedin", "orcid"]

// renders Login component with buttons array as well as size/variant props for use with Material-UI
const Demo = () => {
  return <Login buttons={buttons} size="large" variant="raised" />
}

render(<Demo />, document.querySelector("#demo"))
