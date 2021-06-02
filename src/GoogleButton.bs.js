// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Core from "@material-ui/core";
import * as Styles from "@material-ui/core/styles";
import * as GoogleIcon$DictyComponentsLogin from "./icons/GoogleIcon.bs.js";

var useStyles = Styles.makeStyles(function (theme) {
      return {
              subtitle: {
                width: "100%"
              },
              button: {
                backgroundColor: "#cfd8dc",
                paddingTop: String(Curry._1(theme.spacing, 2)) + "px",
                paddingRight: String(Curry._1(theme.spacing, 3)) + "px",
                paddingBottom: String(Curry._1(theme.spacing, 2)) + "px",
                paddingLeft: String(Curry._1(theme.spacing, 3)) + "px",
                textTransform: "none"
              }
            };
    });

var Styles$1 = {
  useStyles: useStyles
};

function GoogleButton(Props) {
  var text = Props.text;
  var handleClick = Props.handleClick;
  var classes = Curry._1(useStyles, undefined);
  return React.createElement(Core.Button, {
              onClick: handleClick,
              children: React.createElement(Core.Typography, {
                    align: "center",
                    children: text,
                    className: classes.subtitle,
                    color: "textSecondary",
                    variant: "h6"
                  }),
              className: classes.button,
              fullWidth: true,
              size: "large",
              startIcon: React.createElement(GoogleIcon$DictyComponentsLogin.make, {}),
              variant: "contained"
            });
}

var make = GoogleButton;

var $$default = GoogleButton;

export {
  Styles$1 as Styles,
  make ,
  $$default ,
  $$default as default,
  
}
/* useStyles Not a pure module */