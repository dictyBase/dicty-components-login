// @flow
import React, { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
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

library.add(
  faGoogle,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
  faInstagram,
  faGithubAlt,
  faDropbox,
)

// convert names to desired fontawesome icon name
const name2Icon = {
  google: "google",
  facebook: "facebook-f",
  linkedin: "linkedin-in",
  twitter: "twitter",
  youtube: "youtube",
  instagram: "instagram",
  github: "github-alt",
  dropbox: "dropbox",
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
