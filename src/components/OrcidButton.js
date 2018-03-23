// @flow
import React from "react"
import { Flex, Box } from "rebass"
import { FontAwesomeIconContainer, OrcidButtonStyle } from "../styles/Buttons"

/**
 * This is the ORCID social button. Since there is not an appropriate FontAwesome icon for this organization, we are currently using a nonbreaking space instead to keep the styling identical.
 */

const OrcidButton = () => {
  return (
    <Flex justify="center">
      <Box w={"90%"} mb={"5px"}>
        <OrcidButtonStyle size="large" variant="raised">
          <FontAwesomeIconContainer>&nbsp;</FontAwesomeIconContainer>
          &nbsp; Sign in with ORCID
        </OrcidButtonStyle>
      </Box>
    </Flex>
  )
}

export default OrcidButton
