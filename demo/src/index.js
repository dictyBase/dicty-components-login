import React, { Component } from "react"
import { render } from "react-dom"
import Container from "@material-ui/core/Container"
import GoogleButton from "../../src/GoogleButton.bs"

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
      <GoogleButton text="Sign in with Google" handleClick={handleClick} />
    </Container>
  )
}

render(<Demo />, document.querySelector("#demo"))
