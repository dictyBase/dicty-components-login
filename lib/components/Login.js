"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _loginStyles = require("./loginStyles");

require("../academicons/css/academicons.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fontawesomeSvgCore.library.add(_freeBrandsSvgIcons.faGoogle, _freeBrandsSvgIcons.faFacebookF, _freeBrandsSvgIcons.faLinkedinIn, _freeBrandsSvgIcons.faTwitter, _freeBrandsSvgIcons.faYoutube, _freeBrandsSvgIcons.faInstagram, _freeBrandsSvgIcons.faGithubAlt, _freeBrandsSvgIcons.faDropbox);

// convert names to desired fontawesome icon name
var name2Icon = {
  google: "google",
  facebook: "facebook-f",
  linkedin: "linkedin-in",
  twitter: "twitter",
  youtube: "youtube",
  instagram: "instagram",
  github: "github-alt",
  dropbox: "dropbox"
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
          name === "orcid" ? _react2.default.createElement("i", { className: "ai ai-orcid" }) : _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: ["fab", name2Icon[name]] })
        ),
        "\xA0 Sign in with ",
        name
      );
    })
  );
};

exports.default = Login;
module.exports = exports["default"];