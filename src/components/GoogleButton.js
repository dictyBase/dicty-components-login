import React from "react"
import { Flex, Box } from "rebass"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faGoogle from "@fortawesome/fontawesome-free-brands/faGoogle"
import {
  FontAwesomeIconContainer,
  GoogleButtonContainer
} from "../styles/Buttons"

const GoogleButton = () => {
  return (
    <Flex justify="center">
      <Box w={"90%"} mb={"5px"}>
        <GoogleButtonContainer>
          <FontAwesomeIconContainer>
            <FontAwesomeIcon icon={faGoogle} />
          </FontAwesomeIconContainer>&nbsp; Sign in with Google
        </GoogleButtonContainer>
      </Box>
    </Flex>
  )
}

export default GoogleButton
