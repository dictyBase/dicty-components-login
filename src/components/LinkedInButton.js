// @flow
import React from "react"
import { Flex, Box } from "rebass"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faLinkedinIn from "@fortawesome/fontawesome-free-brands/faLinkedinIn"
import {
  FontAwesomeIconContainer,
  LinkedInButtonStyle
} from "../styles/Buttons"

/**
 * This is the LinkedIn social button. It has a FontAwesome icon and then some sign in text.
 */

const LinkedInButton = () => {
  return (
    <Flex justify="center">
      <Box w={"90%"} mb={"5px"}>
        <LinkedInButtonStyle size="large" variant="raised">
          <FontAwesomeIconContainer>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </FontAwesomeIconContainer>
          &nbsp; Sign in with LinkedIn
        </LinkedInButtonStyle>
      </Box>
    </Flex>
  )
}

export default LinkedInButton
