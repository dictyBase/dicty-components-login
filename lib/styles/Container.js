"use strict";

exports.__esModule = true;
exports.Container = undefined;

var _templateObject = _taggedTemplateLiteralLoose(["\n  font-family: roboto;\n  text-align: center;\n"], ["\n  font-family: roboto;\n  text-align: center;\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

require("typeface-roboto");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// basic container with Material-UI font
var Container = exports.Container = _styledComponents2.default.div(_templateObject);