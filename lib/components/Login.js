"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/core/styles");

var _Button = require("@material-ui/core/Button");

var _Button2 = _interopRequireDefault(_Button);

var _reactFontawesome = require("react-fontawesome");

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _Buttons = require("../styles/Buttons");

require("font-awesome/css/font-awesome.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateLoginButtons = function generateLoginButtons(buttons, onClick) {
  return buttons.map(function (name, i) {
    return _react2.default.createElement(
      _Button2.default,
      {
        style: { backgroundColor: "" + _Buttons.socialStyles[name] },
        onClick: function (_onClick) {
          function onClick() {
            return _onClick.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick.toString();
          };

          return onClick;
        }(function () {
          onClick(name);
        }),
        key: i },
      _react2.default.createElement(
        _Buttons.IconContainer,
        null,
        name === "orcid" ? _react2.default.createElement("i", { className: "ai ai-orcid" }) : _react2.default.createElement(_reactFontawesome2.default, { name: name })
      ),
      "\xA0 Sign in with ",
      name
    );
  });
};

/**
 * This is the main login component that generates the user-specified social buttons with an optional custom theme.
 */

var Login = function Login(_ref) {
  var buttons = _ref.buttons,
      theme = _ref.theme,
      onClick = _ref.onClick;

  // $FlowFixMe
  var newTheme = (0, _styles.createMuiTheme)(theme);
  return _react2.default.createElement(
    _styles.MuiThemeProvider,
    { theme: newTheme },
    _react2.default.createElement(
      "div",
      null,
      generateLoginButtons(buttons, onClick)
    )
  );
};

exports.default = Login;
module.exports = exports["default"];