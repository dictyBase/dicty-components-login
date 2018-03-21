import React from "react"
import { Flex, Box } from "rebass"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faFacebookF from "@fortawesome/fontawesome-free-brands/faFacebookF"
import {
  FontAwesomeIconContainer,
  FacebookButtonContainer
} from "../styles/Buttons"

const FacebookButton = () => {
  return (
    <Flex justify="center">
      <Box w={"90%"} mb={"5px"}>
        <FacebookButtonContainer>
          <FontAwesomeIconContainer>
            <FontAwesomeIcon icon={faFacebookF} />
          </FontAwesomeIconContainer>&nbsp; Sign in with Facebook
        </FacebookButtonContainer>
      </Box>
    </Flex>
  )
}

export default FacebookButton
