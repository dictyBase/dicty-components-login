// @flow
import React from "react"
import { Flex, Box } from "rebass"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faGoogle from "@fortawesome/fontawesome-free-brands/faGoogle"
import { FontAwesomeIconContainer, GoogleButtonStyle } from "../styles/Buttons"
/**
 * This is the Google social button. It has a FontAwesome icon and then some sign in text.
 */

const GoogleButton = () => {
  return (
    <Flex justify="center">
      <Box w={"90%"} mb={"5px"}>
        <GoogleButtonStyle size="large" variant="raised">
          <FontAwesomeIconContainer>
            <FontAwesomeIcon icon={faGoogle} />
          </FontAwesomeIconContainer>&nbsp; Sign in with Google
        </GoogleButtonStyle>
      </Box>
    </Flex>
  )
}

export default GoogleButton
