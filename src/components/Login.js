// @flow
import React from "react"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import FontAwesome from "react-fontawesome"
import { IconContainer, socialStyles } from "../styles/Buttons"
import "font-awesome/css/font-awesome.min.css"
import "../academicons/css/academicons.min.css"

type Props = {
  /** List of buttons to display */
  buttons: Array<string>,
  /** Custom theme for MuiThemeProvider */
  theme?: Object,
  /** Action to take after user clicks button */
  onClick: Function,
}

const generateLoginButtons = (buttons, onClick) =>
  buttons.map((name, i) => (
    <Button
      style={{ backgroundColor: `${socialStyles[name]}` }}
      onClick={() => {
        onClick(name)
      }}
      key={i}>
      <IconContainer>
        {name === "orcid" ? (
          <i className="ai ai-orcid" />
        ) : (
          <FontAwesome name={name} />
        )}
      </IconContainer>
      &nbsp; Sign in with {name}
    </Button>
  ))

/**
 * This is the main login component that generates the user-specified social buttons with an optional custom theme.
 */

const Login = ({ buttons, theme, onClick }: Props) => {
  // $FlowFixMe
  const newTheme = createMuiTheme(theme)
  return (
    <MuiThemeProvider theme={newTheme}>
      <div>{generateLoginButtons(buttons, onClick)}</div>
    </MuiThemeProvider>
  )
}

export default Login
