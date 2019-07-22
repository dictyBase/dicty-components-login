import React, { Fragment } from "react";
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

/**
 * This is the main login component that generates the user-specified social buttons.
 */

var Login = function Login(_ref) {
  var buttons = _ref.buttons,
      onClick = _ref.onClick;
  return React.createElement(
    Fragment,
    null,
    buttons.map(function (name, i) {
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
          name === "orcid" ? React.createElement("i", { className: "ai ai-orcid" }) : React.createElement(FontAwesomeIcon, { icon: ["fab", name2Icon[name]] })
        ),
        "\xA0 Sign in with ",
        name
      );
    })
  );
};

export default Login;