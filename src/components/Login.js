// @flow
import React from "react"
import { Flex, Box } from "rebass"
import { DictyHeader } from "../styles/Headers"
import GoogleButton from "./GoogleButton"
import FacebookButton from "./FacebookButton"
import LinkedInButton from "./LinkedInButton"
import OrcidButton from "./OrcidButton"

const Login = () => {
  return (
    <Flex justify="center">
      <Box w={[1, 1 / 2, 1 / 3]}>
        <DictyHeader>
          <h1>Login</h1>
        </DictyHeader>
        <GoogleButton />
        <FacebookButton />
        <LinkedInButton />
        <OrcidButton />
      </Box>
    </Flex>
  )
}

export default Login
