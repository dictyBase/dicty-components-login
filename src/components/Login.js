// @flow
import React from "react"
import Grid from "material-ui/Grid"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import brands from "@fortawesome/fontawesome-free-brands"
import { ThemeProvider } from "styled-components"
import {
  FontAwesomeIconContainer,
  DefaultButton,
  styles
} from "../styles/Buttons"
import { Container } from "../styles/Container"

/**
 * This is the main login component that generates the user-specified social buttons and puts them all in a vertical column.
 */

const generateLoginButtons = buttons => {
  return buttons.map((name, i) => (
    <DefaultButton
      size="large"
      variant="raised"
      style={{ backgroundColor: `${styles[name]}` }}
      key={i}>
      <FontAwesomeIconContainer>
        <FontAwesomeIcon icon={["fab", `${name}`]} />
      </FontAwesomeIconContainer>
      &nbsp; Sign in with {name}
    </DefaultButton>
  ))
}

const Login = ({ buttons }) => {
  return (
    // <ThemeProvider theme={theme}>
    <Container>
      <Grid container justify="center">
        <Grid item xs={6}>
          <Grid container justify="center">
            <Grid item xs={9}>
              {generateLoginButtons(buttons)}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    // </ThemeProvider>
  )
}

export default Login
