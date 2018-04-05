// @flow
import React from "react"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
import Button from "material-ui/Button"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import brands from "@fortawesome/fontawesome-free-brands"
import { IconContainer, socialStyles } from "../styles/Buttons"

type Props = {
  /** List of buttons to display */
  buttons: Array<string>,
  /** Custom theme for MuiThemeProvider */
  theme: Object
}

const generateLoginButtons = buttons => {
  return buttons.map((name, i) => (
    <Button style={{ backgroundColor: `${socialStyles[name]}` }} key={i}>
      <IconContainer>
        {name === "orcid" ? (
          <i className="ai ai-orcid" />
        ) : (
          <FontAwesomeIcon icon={["fab", `${name}`]} />
        )}
      </IconContainer>
      &nbsp; Sign in with {name}
    </Button>
  ))
}

/**
 * This is the main login component that generates the user-specified social buttons with an optional custom theme.
 */

const Login = ({ buttons, theme }: Props) => {
  const newTheme = createMuiTheme(theme)
  return (
    <MuiThemeProvider theme={newTheme}>
      {generateLoginButtons(buttons)}
    </MuiThemeProvider>
  )
}

export default Login
