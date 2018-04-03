// @flow
import React from "react"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import brands from "@fortawesome/fontawesome-free-brands"
import {
  FontAwesomeIconContainer,
  DefaultButton,
  styles
} from "../styles/Buttons"

type Props = {
  /** List of buttons to display */
  buttons: Array<string>
}

const generateLoginButtons = (buttons, size, variant) => {
  return buttons.map((name, i) => (
    <DefaultButton style={{ backgroundColor: `${styles[name]}` }} key={i}>
      <FontAwesomeIconContainer>
        <FontAwesomeIcon icon={["fab", `${name}`]} />
      </FontAwesomeIconContainer>
      &nbsp; Sign in with {name}
    </DefaultButton>
  ))
}

/**
 * This is the main login component that generates the user-specified social buttons and puts them all in a vertical column.
 */

const Login = ({ buttons }: Props) => {
  return <div>{generateLoginButtons(buttons)}</div>
}

export default Login
