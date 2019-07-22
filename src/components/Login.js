// @flow
import React, { Fragment } from "react"
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

/**
 * This is the main login component that generates the user-specified social buttons.
 */

const Login = ({ buttons, onClick }: Props) => (
  <Fragment>
    {buttons.map((name, i) => (
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
            <FontAwesomeIcon icon={["fab", name2Icon[name]]} />
          )}
        </IconContainer>
        &nbsp; Sign in with {name}
      </StyledButton>
    ))}
  </Fragment>
)

export default Login
