import React from "react"
import { Flex, Box } from "rebass"
import {
  FontAwesomeIconContainer,
  OrcidButtonContainer
} from "../styles/Buttons"

const OrcidButton = () => {
  return (
    <Flex justify="center">
      <Box w={"90%"} mb={"5px"}>
        <OrcidButtonContainer>
          <FontAwesomeIconContainer>&nbsp;</FontAwesomeIconContainer>
          &nbsp; Sign in with ORCID
        </OrcidButtonContainer>
      </Box>
    </Flex>
  )
}

export default OrcidButton
