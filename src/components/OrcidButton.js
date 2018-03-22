// @flow
import React from "react"
import { Flex, Box } from "rebass"
import {
  FontAwesomeIconContainer,
  OrcidButtonContainer
} from "../styles/Buttons"

/**
 * This is the ORCID social button. Since there is not an appropriate FontAwesome icon for this organization, we are currently using a nonbreaking space instead to keep the styling identical.
 */

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
