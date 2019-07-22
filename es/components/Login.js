import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF, faLinkedinIn, faTwitter, faYoutube, faInstagram, faGithubAlt, faDropbox } from "@fortawesome/free-brands-svg-icons";
import { IconContainer, socialButtonColors, StyledButton } from "./loginStyles";
import "../academicons/css/academicons.min.css";

// convert names to desired fontawesome icon name
var name2Icon = {
  google: faGoogle,
  facebook: faFacebookF,
  linkedin: faLinkedinIn,
  twitter: faTwitter,
  youtube: faYoutube,
  instagram: faInstagram,
  github: faGithubAlt,
  dropbox: faDropbox
};

var generateLoginButtons = function generateLoginButtons(buttons, onClick) {
  return buttons.map(function (name, i) {
    return React.createElement(
      StyledButton,
      {
        style: { backgroundColor: "" + socialButtonColors[name] },
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
      React.createElement(
        IconContainer,
        null,
        name === "orcid" ? React.createElement("i", { className: "ai ai-orcid" }) : React.createElement(FontAwesomeIcon, { icon: name2Icon[name] })
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
  var newTheme = createMuiTheme(theme);
  return React.createElement(
    MuiThemeProvider,
    { theme: newTheme },
    React.createElement(
      "div",
      null,
      generateLoginButtons(buttons, onClick)
    )
  );
};

export default Login;