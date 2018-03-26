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

    /* Set up custom props */
    background-color: ${props => {
      return props.theme.google
        ? "#15317e"
        : props.theme.facebook
          ? "#3b5998"
          : props.theme.linkedin
            ? "#A3BAE9"
            : props.theme.orcid ? "#a6ce39" : "palevioletred"
    }};
  }
`
export const theme = {
  google: "#dd4b39",
  facebook: "#3b5998",
  linkedin: "#005983",
  orcid: "#a6ce39"
}

export const FontAwesomeIconContainer = styled.i`
  border-right: 1px solid black;
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
