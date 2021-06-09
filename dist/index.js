var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// src/GoogleButton.bs.js
var GoogleButton_bs_exports = {};
__export(GoogleButton_bs_exports, {
  $$default: () => $$default,
  Styles: () => Styles$1,
  default: () => $$default,
  make: () => make2
});
import {
  _1
} from "@rescript/std/lib/es6/curry.js";
import {
  createElement as createElement2
} from "react";
import {
  unsafeAddProp
} from "@rescript/react/src/ReactDOMStyle.bs.js";
import {
  Button,
  Typography
} from "@material-ui/core";
import {
  makeStyles
} from "@material-ui/core/styles";

// src/icons/GoogleIcon.bs.js
import {
  createElement
} from "react";
import {
  SvgIcon
} from "@material-ui/core";
function GoogleIcon(Props) {
  return createElement(SvgIcon, {
    children: null,
    viewBox: "0 0 533.5 544.3"
  }, createElement("path", {
    d: "M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z",
    fill: "#fff"
  }), createElement("path", {
    d: "M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z",
    fill: "#fff"
  }), createElement("path", {
    d: "M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z",
    fill: "#fff"
  }), createElement("path", {
    d: "M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z",
    fill: "#fff"
  }));
}
var make = GoogleIcon;

// src/GoogleButton.bs.js
var useStyles = makeStyles(function(theme) {
  return {
    subtitle: {
      color: "#fafafa",
      width: "100%"
    },
    button: unsafeAddProp({
      backgroundColor: "#df4b37",
      paddingTop: String(_1(theme.spacing, 2)) + "px",
      paddingRight: String(_1(theme.spacing, 3)) + "px",
      paddingBottom: String(_1(theme.spacing, 2)) + "px",
      paddingLeft: String(_1(theme.spacing, 3)) + "px",
      textTransform: "none"
    }, "&:hover", {
      backgroundColor: "#a60e0e"
    })
  };
}), Styles$1 = {
  useStyles
};
function GoogleButton(Props) {
  var text = Props.text, handleClick = Props.handleClick, classes = _1(useStyles, void 0);
  return createElement2(Button, {
    onClick: handleClick,
    children: createElement2(Typography, {
      align: "center",
      children: text,
      className: classes.subtitle,
      color: "textSecondary",
      variant: "h6"
    }),
    className: classes.button,
    fullWidth: !0,
    size: "large",
    startIcon: createElement2(make, {}),
    variant: "contained"
  });
}
var make2 = GoogleButton, $$default = GoogleButton;

// src/GoogleButton.gen.tsx
var GoogleButtonBS = GoogleButton_bs_exports, make3 = GoogleButtonBS.make;

// src/LinkedInButton.bs.js
var LinkedInButton_bs_exports = {};
__export(LinkedInButton_bs_exports, {
  $$default: () => $$default2,
  Styles: () => Styles$12,
  default: () => $$default2,
  make: () => make5
});
import {
  _1 as _12
} from "@rescript/std/lib/es6/curry.js";
import {
  createElement as createElement4
} from "react";
import {
  unsafeAddProp as unsafeAddProp2
} from "@rescript/react/src/ReactDOMStyle.bs.js";
import {
  Button as Button2,
  Typography as Typography2
} from "@material-ui/core";
import {
  makeStyles as makeStyles2
} from "@material-ui/core/styles";

// src/icons/LinkedInIcon.bs.js
import {
  createElement as createElement3
} from "react";
import {
  SvgIcon as SvgIcon2
} from "@material-ui/core";
function LinkedInIcon(Props) {
  return createElement3(SvgIcon2, {
    children: createElement3("path", {
      d: `M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
        C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
        H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
        c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
        s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
        c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
        c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
        c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
        L341.91,330.654L341.91,330.654z`,
      fill: "white"
    }),
    viewBox: "0 0 382 382"
  });
}
var make4 = LinkedInIcon;

// src/LinkedInButton.bs.js
var useStyles2 = makeStyles2(function(theme) {
  return {
    subtitle: {
      color: "#fafafa",
      width: "100%"
    },
    button: unsafeAddProp2({
      backgroundColor: "#1565c0",
      paddingTop: String(_12(theme.spacing, 2)) + "px",
      paddingRight: String(_12(theme.spacing, 3)) + "px",
      paddingBottom: String(_12(theme.spacing, 2)) + "px",
      paddingLeft: String(_12(theme.spacing, 3)) + "px",
      textTransform: "none"
    }, "&:hover", {
      backgroundColor: "#003c8f"
    })
  };
}), Styles$12 = {
  useStyles: useStyles2
};
function LinkedInButton(Props) {
  var text = Props.text, handleClick = Props.handleClick, classes = _12(useStyles2, void 0);
  return createElement4(Button2, {
    onClick: handleClick,
    children: createElement4(Typography2, {
      align: "center",
      children: text,
      className: classes.subtitle,
      color: "textSecondary",
      variant: "h6"
    }),
    className: classes.button,
    fullWidth: !0,
    size: "large",
    startIcon: createElement4(make4, {}),
    variant: "contained"
  });
}
var make5 = LinkedInButton, $$default2 = LinkedInButton;

// src/LinkedInButton.gen.tsx
var LinkedInButtonBS = LinkedInButton_bs_exports, make6 = LinkedInButtonBS.make;

// src/OrcidButton.bs.js
var OrcidButton_bs_exports = {};
__export(OrcidButton_bs_exports, {
  $$default: () => $$default3,
  Styles: () => Styles$13,
  default: () => $$default3,
  make: () => make8
});
import {
  _1 as _13
} from "@rescript/std/lib/es6/curry.js";
import {
  createElement as createElement6
} from "react";
import {
  unsafeAddProp as unsafeAddProp3
} from "@rescript/react/src/ReactDOMStyle.bs.js";
import {
  Button as Button3,
  Typography as Typography3
} from "@material-ui/core";
import {
  makeStyles as makeStyles3
} from "@material-ui/core/styles";

// src/icons/OrcidIcon.bs.js
import {
  createElement as createElement5
} from "react";
import {
  SvgIcon as SvgIcon3
} from "@material-ui/core";
function OrcidIcon(Props) {
  return createElement5(SvgIcon3, {
    children: null,
    viewBox: "0 0 256 256"
  }, createElement5("path", {
    d: "M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z",
    fill: "white"
  }), createElement5("g", void 0, createElement5("path", {
    d: "M86.3,186.2H70.9V79.1h15.4v48.4V186.2z",
    fill: "#689f38"
  }), createElement5("path", {
    d: `M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5
		c34.9,0,42.9-26.5,42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z`,
    fill: "#689f38"
  }), createElement5("path", {
    d: `M88.7,56.8c0,5.5-4.5,10.1-10.1,10.1c-5.6,0-10.1-4.6-10.1-10.1c0-5.6,4.5-10.1,10.1-10.1
		C84.2,46.7,88.7,51.3,88.7,56.8z`,
    fill: "##689f38"
  })));
}
var make7 = OrcidIcon;

// src/OrcidButton.bs.js
var useStyles3 = makeStyles3(function(theme) {
  return {
    subtitle: {
      color: "#fafafa",
      width: "100%"
    },
    button: unsafeAddProp3({
      backgroundColor: "#9ccc65",
      paddingTop: String(_13(theme.spacing, 2)) + "px",
      paddingRight: String(_13(theme.spacing, 3)) + "px",
      paddingBottom: String(_13(theme.spacing, 2)) + "px",
      paddingLeft: String(_13(theme.spacing, 3)) + "px",
      textTransform: "none"
    }, "&:hover", {
      backgroundColor: "#6b9b37"
    })
  };
}), Styles$13 = {
  useStyles: useStyles3
};
function OrcidButton(Props) {
  var text = Props.text, handleClick = Props.handleClick, classes = _13(useStyles3, void 0);
  return createElement6(Button3, {
    onClick: handleClick,
    children: createElement6(Typography3, {
      align: "center",
      children: text,
      className: classes.subtitle,
      color: "textSecondary",
      variant: "h6"
    }),
    className: classes.button,
    fullWidth: !0,
    size: "large",
    startIcon: createElement6(make7, {}),
    variant: "contained"
  });
}
var make8 = OrcidButton, $$default3 = OrcidButton;

// src/OrcidButton.gen.tsx
var OrcidButtonBS = OrcidButton_bs_exports, make9 = OrcidButtonBS.make;
export {
  make3 as GoogleButton,
  make6 as LinkedInButton,
  make9 as OrcidButton
};
//# sourceMappingURL=index.js.map
