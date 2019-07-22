"use strict";

exports.__esModule = true;
exports.IconContainer = exports.socialStyles = undefined;

var _styles = require("@material-ui/styles");

// hex codes for some of the more popular providers
var socialStyles = exports.socialStyles = {
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

  // styling for the icon inside each button (if applicable)
};
var IconContainer = exports.IconContainer = (0, _styles.styled)("i")({
  width: "15%",
  fontSize: "1.8em",
  textAlign: "center"
});