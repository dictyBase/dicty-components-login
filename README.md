# dicty-components-login

[![Travis][build-badge]][build]
[![Coveralls][coveralls-badge]][coveralls]
[![dependencies Status](https://david-dm.org/dictyBase/dicty-components-login/status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-login)
[![devDependencies Status](https://david-dm.org/dictyBase/dicty-components-login/dev-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-login?type=dev)
[![peerDependencies Status](https://david-dm.org/dictyBase/dicty-components-login/peer-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-login?type=peer)

React component for displaying the social login buttons in all dictyBase web applications.

For an example of the Login component, run `npm run styleguide`. To run the demo, run `npm start`.

## Usage

`import { Login } from "dicty-components-login"`

This component expects three props to be passed:

* `buttons`: an array of buttons to display
* `theme`: an object for a custom theme for MuiThemeProvider
* `onClick`: the action to take when the user clicks a button

For example, `<Login buttons={buttons} theme={theme} onClick={this.handleClick} />`

## Notes

When passing in a custom theme, there is no need to include the `createMuiTheme` wrapper. Just write the theme as a standalone object in this format:

```
const theme = {
  overrides: {
    MuiButton: {
      // name of the stylesheet
      root: {
        // name of the rule
        color: "white" // etc
      }
    }
  }
}
```

### Suggested Theme

```
const theme = {
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 3,
        color: "white",
        width: "80%",
        justifyContent: "start",
        minHeight: "55px",
        marginBottom: "5px"
      }
    }
  }
}
```

### Suggested Buttons

`const buttons = ["orcid", "google", "linkedin"]`

### Suggested click handler

```
handleClick = name => {
    \\ do something
  }
```

See demo and `styleguide` for more information.

[build-badge]: https://travis-ci.org/dictyBase/dicty-components-login.svg?branch=develop
[build]: https://travis-ci.org/dictyBase/dicty-components-login
[coveralls-badge]: https://coveralls.io/repos/github/dictyBase/dicty-components-login/badge.svg?branch=develop
[coveralls]: https://coveralls.io/github/dictyBase/dicty-components-login?branch=develop
