"use strict";

exports.__esModule = true;
exports.IconContainer = exports.socialStyles = undefined;

var _templateObject = _taggedTemplateLiteralLoose(["\n  width: 15%;\n  font-size: 1.8em;\n  text-align: left;\n"], ["\n  width: 15%;\n  font-size: 1.8em;\n  text-align: left;\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

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
};var IconContainer = exports.IconContainer = _styledComponents2.default.i(_templateObject);