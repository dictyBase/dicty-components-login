"use strict";

exports.__esModule = true;
exports.StyledButton = exports.IconContainer = exports.socialButtonColors = undefined;

var _Button = require("@material-ui/core/Button");

var _Button2 = _interopRequireDefault(_Button);

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// hex codes for some of the more popular providers
var socialButtonColors = exports.socialButtonColors = {
  google: "#dd4b39",
  facebook: "#3b5998",
  linkedin: "#007bb6",
  orcid: "#a6ce39",
  twitter: "#00aced",
  youtube: "#bb0000",
  instagram: "#517fa4",
  github: "#171516",
  dropbox: "#007ee5"
};

var IconContainer = exports.IconContainer = (0, _styles.styled)("span")({
  width: "15%",
  fontSize: "1.8em",
  textAlign: "center"
});

var StyledButton = exports.StyledButton = (0, _styles.styled)(_Button2.default)({
  borderRadius: 3,
  color: "#fff",
  width: "80%",
  justifyContent: "start",
  minHeight: "55px",
  marginBottom: "5px"
});