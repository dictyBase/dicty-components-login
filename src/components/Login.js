// @flow
import React from "react"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGoogle,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
  faInstagram,
  faGithubAlt,
  faDropbox,
} from "@fortawesome/free-brands-svg-icons"
import { IconContainer, socialButtonColors, StyledButton } from "./loginStyles"
import "../academicons/css/academicons.min.css"

// convert names to desired fontawesome icon name
const name2Icon = {
  google: faGoogle,
  facebook: faFacebookF,
  linkedin: faLinkedinIn,
  twitter: faTwitter,
  youtube: faYoutube,
  instagram: faInstagram,
  github: faGithubAlt,
  dropbox: faDropbox,
}

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
    <StyledButton
      style={{ backgroundColor: `${socialButtonColors[name]}` }}
      onClick={() => {
        onClick(name)
      }}
      key={i}>
      <IconContainer>
        {name === "orcid" ? (
          <i className="ai ai-orcid" />
        ) : (
          <FontAwesomeIcon icon={name2Icon[name]} />
        )}
      </IconContainer>
      &nbsp; Sign in with {name}
    </StyledButton>
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
