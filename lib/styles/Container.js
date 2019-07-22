"use strict";

exports.__esModule = true;
exports.Container = undefined;

var _templateObject = _taggedTemplateLiteralLoose(["\n  font-family: roboto;\n  text-align: center;\n"], ["\n  font-family: roboto;\n  text-align: center;\n"]);

var _styles = require("@material-ui/styles");

require("typeface-roboto");

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// basic container with Material-UI font
var Container = exports.Container = _styles.styled.div(_templateObject);