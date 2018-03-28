// @flow
import styled from "styled-components"
import Button from "material-ui/Button"

// this export does not work with Material-UI but temporarily keeping it for reference
// export const LinkButton = Button.withComponent("a")

export const styles = {
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

export const FontAwesomeIconContainer = styled.i`
  line-height: 40px;
  width: 40px;
  font-size: 1.8em;
  text-align: left;
`
