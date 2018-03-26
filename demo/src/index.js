import React from "react"
import { render } from "react-dom"

import Login from "../../src/components/Login"

const buttons = ["Google", "Facebook", "LinkedIn", "ORCID"]

const Demo = () => {
  return <Login buttons={buttons} />
}

render(<Demo />, document.querySelector("#demo"))
