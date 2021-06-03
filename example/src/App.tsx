import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import {
  OrcidButton,
  GoogleButton,
  LinkedInButton,
} from "dicty-components-login"

const App = () => {
  const handleClick = (event: MouseEvent) => {
    alert(`You clicked the button`)
    console.log(event)
  }

  return (
    <Container maxWidth="xs">
      <Box textAlign="center" mt={2}>
        <Typography variant="h4" gutterBottom>
          Log in
        </Typography>
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
