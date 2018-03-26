// @flow
import React from "react"
import { Flex, Box } from "rebass"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import { ThemeProvider } from "styled-components"
import {
  FontAwesomeIconContainer,
  DefaultButton,
  theme
} from "../styles/Buttons"
import { Container } from "../styles/Container"
import brands from "@fortawesome/fontawesome-free-brands"

/**
 * This is the main login component that puts all of the individual social buttons in one place.
 */

const loginButtons = buttons => {
  return buttons.map((name, i) => (
    <Flex justify="center" key={i}>
      <Box w={"90%"} mb={"5px"}>
        <DefaultButton size="large" variant="raised" theme={name}>
          <FontAwesomeIconContainer>
            <FontAwesomeIcon icon={["fab", `${name}` ? `${name}` : ""]} />
          </FontAwesomeIconContainer>
          &nbsp; Sign in with {name}
        </DefaultButton>
      </Box>
    </Flex>
  ))
}

const Login = ({ buttons }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Flex justify="center">
          <Box w={[1, 1 / 2, 1 / 3]}>{loginButtons(buttons)}</Box>
        </Flex>
      </Container>
    </ThemeProvider>
  )
}

export default Login
