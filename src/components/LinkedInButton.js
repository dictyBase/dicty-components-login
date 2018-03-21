import React from "react"
import { Flex, Box } from "rebass"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faLinkedinIn from "@fortawesome/fontawesome-free-brands/faLinkedinIn"
import {
  FontAwesomeIconContainer,
  LinkedInButtonContainer
} from "../styles/Buttons"

const LinkedInButton = () => {
  return (
    <Flex justify="center">
      <Box w={"90%"} mb={"5px"}>
        <LinkedInButtonContainer>
          <FontAwesomeIconContainer>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </FontAwesomeIconContainer>
          &nbsp; Sign in with LinkedIn
        </LinkedInButtonContainer>
      </Box>
    </Flex>
  )
}

export default LinkedInButton
