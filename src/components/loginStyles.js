import Button from "@material-ui/core/Button"
import { styled } from "@material-ui/core/styles"

// hex codes for some of the more popular providers
export const socialButtonColors = {
  google: "#dd4b39",
  facebook: "#3b5998",
  linkedin: "#007bb6",
  orcid: "#a6ce39",
  twitter: "#00aced",
  youtube: "#bb0000",
  instagram: "#517fa4",
  github: "#171516",
  dropbox: "#007ee5",
}

export const IconContainer = styled("span")({
  width: "15%",
  fontSize: "1.8em",
  textAlign: "center",
})

export const StyledButton = styled(Button)({
  borderRadius: 3,
  color: "#fff",
  width: "80%",
  justifyContent: "start",
  minHeight: "55px",
  marginBottom: "5px",
})