// @flow
import React from "react"
import { Flex, Box } from "rebass"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faFacebookF from "@fortawesome/fontawesome-free-brands/faFacebookF"
import {
  FontAwesomeIconContainer,
  FacebookButtonStyle
} from "../styles/Buttons"

/**
 * This is the Facebook social button. It has a FontAwesome icon and then some sign in text.
 */

const FacebookButton = () => {
  return (
    <Flex justify="center">
      <Box w={"90%"} mb={"5px"}>
        <FacebookButtonStyle size="large" variant="raised">
          <FontAwesomeIconContainer>
            <FontAwesomeIcon icon={faFacebookF} />
          </FontAwesomeIconContainer>&nbsp; Sign in with Facebook
        </FacebookButtonStyle>
      </Box>
    </Flex>
  )
}

export default FacebookButton
