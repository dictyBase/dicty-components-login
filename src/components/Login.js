// @flow
import React from "react"
import { Flex, Box } from "rebass"
import GoogleButton from "./GoogleButton"
import FacebookButton from "./FacebookButton"
import LinkedInButton from "./LinkedInButton"
import OrcidButton from "./OrcidButton"
import { Container } from "../styles/Container"

/**
 * This is the main login component that puts all of the individual social buttons in one place.
 */

const Login = () => {
  return (
    <Container>
      <Flex justify="center">
        <Box w={[1, 1 / 2, 1 / 3]}>
          <GoogleButton />
          <FacebookButton />
          <LinkedInButton />
          <OrcidButton />
        </Box>
      </Flex>
    </Container>
  )
}

export default Login
