// @flow
import React from "react"
import Grid from "material-ui/Grid"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import brands from "@fortawesome/fontawesome-free-brands"
import {
  FontAwesomeIconContainer,
  DefaultButton,
  styles
} from "../styles/Buttons"
import { Container } from "../styles/Container"

type Props = {
  /** List of buttons to display */
  buttons: Array<string>,
  /** Size as used by Material-UI. Accepts "small", "medium" or "large". */
  size?: string,
  /** Style of button. Accepts "flat", "raised" or "fab". */
  variant?: string
}

const generateLoginButtons = (buttons, size, variant) => {
  return buttons.map((name, i) => (
    <DefaultButton
      size={size}
      variant={variant}
      style={{ backgroundColor: `${styles[name]}` }}
      key={i}>
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

const Login = ({ buttons, size, variant }: Props) => {
  return (
    <Container>
      <Grid container justify="center">
        <Grid item xs={12} sm={9} md={6} lg={6}>
          <Grid container justify="center">
            <Grid item xs={9}>
              {generateLoginButtons(buttons, size, variant)}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
