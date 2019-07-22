"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _loginStyles = require("./loginStyles");

require("../academicons/css/academicons.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// convert names to desired fontawesome icon name
var name2Icon = {
  google: _freeBrandsSvgIcons.faGoogle,
  facebook: _freeBrandsSvgIcons.faFacebookF,
  linkedin: _freeBrandsSvgIcons.faLinkedinIn,
  twitter: _freeBrandsSvgIcons.faTwitter,
  youtube: _freeBrandsSvgIcons.faYoutube,
  instagram: _freeBrandsSvgIcons.faInstagram,
  github: _freeBrandsSvgIcons.faGithubAlt,
  dropbox: _freeBrandsSvgIcons.faDropbox
};


/**
 * This is the main login component that generates the user-specified social buttons.
 */

var Login = function Login(_ref) {
  var buttons = _ref.buttons,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    buttons.map(function (name, i) {
      return _react2.default.createElement(
        _loginStyles.StyledButton,
        {
          style: { backgroundColor: "" + _loginStyles.socialButtonColors[name] },
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
          _loginStyles.IconContainer,
          null,
          name === "orcid" ? _react2.default.createElement("i", { className: "ai ai-orcid" }) : _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: name2Icon[name] })
        ),
        "\xA0 Sign in with ",
        name
      );
    })
  );
};

exports.default = Login;
module.exports = exports["default"];