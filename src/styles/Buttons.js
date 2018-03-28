// @flow
import styled from "styled-components"
import Button from "material-ui/Button"

// this export does not work with Material-UI but temporarily keeping it for reference
// export const LinkButton = Button.withComponent("a")

export const DefaultButton = styled(Button)`
  && {
    color: #fff;
    width: 80%;
    justify-content: start;
    background-color: palevioletred;
    min-height: 55px;

    .google {
      background-color: #dd4b39;
    }
  }
`
export const styles = {
  google: "#DB4437",
  facebook: "#3B5998",
  linkedin: "#0077B5",
  orcid: "#a6ce39"
}

export const FontAwesomeIconContainer = styled.i`
  line-height: 45px;
  width: 45px;
  font-size: 1.8em;
  text-align: left;
`

export const GoogleButtonStyle = styled(DefaultButton)`
  && {
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

export const FacebookButtonStyle = styled(DefaultButton)`
  && {
    background-color: #3b5998;

    &:focus,
    &:hover,
    &:active {
      color: #fff;
      background-color: #2d4373;
      border-color: rgba(0, 0, 0, 0.2);
    }
  }
`

export const LinkedInButtonStyle = styled(DefaultButton)`
  && {
    background-color: #007bb6;

    &:focus,
    &:hover,
    &:active {
      color: #fff;
      background-color: #005983;
      border-color: rgba(0, 0, 0, 0.2);
    }
  }
`

export const OrcidButtonStyle = styled(DefaultButton)`
  && {
    background-color: #a6ce39;

    &:focus,
    &:hover,
    &:active {
      color: #fff;
      background-color: #88aa2a;
      border-color: rgba(0, 0, 0, 0.2);
    }
  }
`
