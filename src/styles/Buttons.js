// @flow
import styled from "styled-components"
import Button from "material-ui/Button"

// export const LinkButton = Button.withComponent("a")

export const FontAwesomeIconContainer = styled.i`
  border-right: 1px solid black;
  line-height: 45px;
  width: 45px;
  font-size: 1.8em;
`

export const GoogleButtonStyle = styled(Button)`
  && {
    color: #fff;
    background-color: #dd4b39;

    &:focus,
    &:hover,
    &:active {
      color: #fff;
      background-color: #c23321;
      border-color: rgba(0, 0, 0, 0.2);
    }
  }
`

export const FacebookButtonStyle = styled(Button)`
  && {
    background-color: #3b5998;
    color: #fff;

    &:focus,
    &:hover,
    &:active {
      color: #fff;
      background-color: #2d4373;
      border-color: rgba(0, 0, 0, 0.2);
    }
  }
`

export const LinkedInButtonStyle = styled(Button)`
  && {
    background-color: #007bb6;
    color: #fff;

    &:focus,
    &:hover,
    &:active {
      color: #fff;
      background-color: #005983;
      border-color: rgba(0, 0, 0, 0.2);
    }
  }
`

export const OrcidButtonStyle = styled(Button)`
  && {
    background-color: #a6ce39;
    color: #fff;

    &:focus,
    &:hover,
    &:active {
      color: #fff;
      background-color: #88aa2a;
      border-color: rgba(0, 0, 0, 0.2);
    }
  }
`
