# dicty-components-login

[![Dependency Status](https://david-dm.org/dictybase/dicty-components-login/master.svg?style=flat-square)](https://david-dm.org/dictybase/dicty-components-login/master)
[![devDependencies Status](https://david-dm.org/dictyBase/dicty-components-login/master/dev-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-login/master?type=dev)
[![peerDependencies Status](https://david-dm.org/dictyBase/dicty-components-login/master/peer-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-login/master?type=peer)

React library for displaying the social login buttons in all dictyBase web applications.

## Usage

`import { Login } from "dicty-components-login"`

This component expects the following props to be passed:

- `buttons`: an array of buttons to display
- `onClick`: function called when the user clicks a button

For example, `<Login buttons={buttons} onClick={this.handleClick} />`

### Suggested Buttons

`const buttons = ["orcid", "google", "linkedin"]`

### Suggested click handler

```
handleClick = name => {
    \\ do something
  }
```

Run the demo (`npm run start`) for an example.
