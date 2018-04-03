// @flow
import styled from "styled-components"
import Button from "material-ui/Button"

// hex codes for some of the more popular providers
export const socialStyles = {
  google: "#dd4b39",
  facebook: "#3b5998",
  linkedin: "#007bb6",
  orcid: "#a6ce39",
  twitter: "#00aced",
  youtube: "#bb0000",
  instagram: "#517fa4",
  pinterest: "#cb2027",
  github: "#171516",
  dropbox: "#007ee5"
}

// default styling for each button
export const DefaultButton = styled(Button)`
  && {
    color: #fff;
    width: 80%;
    justify-content: start;
    background-color: palevioletred;
    min-height: 55px;
    margin-bottom: 5px;
  }
`

// styling for the icon inside each button (if applicable)
export const IconContainer = styled.i`
  width: 15%;
  font-size: 1.8em;
  text-align: left;
`
