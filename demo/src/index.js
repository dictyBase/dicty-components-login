import React, { Component } from "react"
import { render } from "react-dom"
import Container from "@material-ui/core/Container"
import GoogleButton from "../../src/GoogleButton.bs"
import LinkedInButton from "../../src/LinkedInButton.bs"
import OrcidButton from "../../src/OrcidButton.bs"

const Demo = () => {
  const handleClick = (name) => {
    alert(`You clicked ${name}`)
    console.log(`You clicked ${name}`)
  }

  return (
    <Container maxWidth="xs">
      <center>
        <h1>Log in</h1>
      </center>
      <OrcidButton text="Sign in with ORCID" handleClick={handleClick} />
      <p />
      <GoogleButton text="Sign in with Google" handleClick={handleClick} />
      <p />
      <LinkedInButton text="Sign in with LinkedIn" handleClick={handleClick} />
    </Container>
  )
}

render(<Demo />, document.querySelector("#demo"))
