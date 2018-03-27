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
 * This is the main login component that generates the user-specified social buttons and puts them all in a vertical column.
 */

const generateLoginButtons = buttons => {
  return buttons.map((name, i) => (
    <DefaultButton size="large" variant="raised" theme={name} key={i}>
      <FontAwesomeIconContainer>
        <FontAwesomeIcon icon={["fab", `${name}` ? `${name}` : ""]} />
      </FontAwesomeIconContainer>
      &nbsp; Sign in with {name}
    </DefaultButton>
  ))
}

const Login = ({ buttons }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Flex justify="center">
          <Box w={[1, 3 / 4, "60%", "40%"]}>
            <Flex justify="center">
              <Box w={"90%"} mb={"5px"}>
                {generateLoginButtons(buttons)}
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </ThemeProvider>
  )
}

export default Login
