import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import {
  OrcidButton,
  GoogleButton,
  LinkedInButton,
} from "dicty-components-login"

const App = () => {
  const handleClick = (name: string) => {
    alert(`You clicked ${name}`)
    console.log(`You clicked ${name}`)
  }

  return (
    <Container maxWidth="xs">
      <Box textAlign="center">
        <h1>Log in</h1>
      </Box>
      <OrcidButton text="Sign in with ORCID" handleClick={handleClick} />
      <p />
      <GoogleButton text="Sign in with Google" handleClick={handleClick} />
      <p />
      <LinkedInButton text="Sign in with LinkedIn" handleClick={handleClick} />
    </Container>
  )
}

export default App
