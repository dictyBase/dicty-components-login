# dicty-components-login

[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](LICENSE)  
![GitHub action](https://github.com/dictyBase/dicty-components-login/workflows/Node%20CI/badge.svg)
[![Dependency Status](https://david-dm.org/dictyBase/dicty-components-login/develop.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-login/develop)
[![devDependency Status](https://david-dm.org/dictyBase/dicty-components-login/develop/dev-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-login/develop?type=dev)
![GitHub tag](https://img.shields.io/github/v/tag/dictyBase/dicty-components-login)  
![Commits](https://badgen.net/github/commits/dictyBase/dicty-components-login/develop)
![Last commit](https://badgen.net/github/last-commit/dictyBase/dicty-components-login/develop)
![Branches](https://badgen.net/github/branches/dictyBase/dicty-components-login)
![Tags](https://badgen.net/github/tags/dictyBase/dicty-components-login)
![GitHub repo size](https://img.shields.io/github/repo-size/dictyBase/dicty-components-login?style=plastic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dictyBase/dicty-components-login?style=plastic)
[![Lines of Code](https://badgen.net/codeclimate/loc/dictyBase/dicty-components-login)](https://codeclimate.com/github/dictyBase/dicty-components-login/code)  
![Issues](https://badgen.net/github/issues/dictyBase/dicty-components-login)
![Open Issues](https://badgen.net/github/open-issues/dictyBase/dicty-components-login)
![Closed Issues](https://badgen.net/github/closed-issues/dictyBase/dicty-components-login)
![Total PRS](https://badgen.net/github/prs/dictyBase/dicty-components-login)
![Open PRS](https://badgen.net/github/open-prs/dictyBase/dicty-components-login)
![Closed PRS](https://badgen.net/github/closed-prs/dictyBase/dicty-components-login)
![Merged PRS](https://badgen.net/github/merged-prs/dictyBase/dicty-components-login)  
[![Technical debt](https://badgen.net/codeclimate/tech-debt/dictyBase/dicty-components-login)](https://codeclimate.com/github/dictyBase/dicty-components-login/trends/technical_debt)
[![Issues](https://badgen.net/codeclimate/issues/dictyBase/dicty-components-login)](https://codeclimate.com/github/dictyBase/dicty-components-login/issues)
[![Maintainability percentage](https://badgen.net/codeclimate/maintainability-percentage/dictyBase/dicty-components-login)](https://codeclimate.com/github/dictyBase/dicty-components-login)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=dictyBase/dicty-components-login)](https://dependabot.com)  
[![Funding](https://badgen.net/badge/NIGMS/Rex%20L%20Chisholm,dictyBase/yellow?list=|)](https://projectreporter.nih.gov/project_info_description.cfm?aid=9476993)
[![Funding](https://badgen.net/badge/NIGMS/Rex%20L%20Chisholm,DSC/yellow?list=|)](https://projectreporter.nih.gov/project_info_description.cfm?aid=9438930)

This is a React library for displaying the social login buttons in all dictyBase web applications.

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

## Development

- Clone the `develop` branch of this repository
- Run `npm install`
- Create a feature branch (feature/foo) or `bug/foo` or `documentation/foo` or
  `refactor/foo`, whatever suits the purpose of development
- To run a demo during development  
  `npm run start`
- Write tests in the same folder as the component.
- At the end of development, `npm run test:run` should pass.
- Write documentation using `styleguidist` and build it using `npm run styleguide:build`.
- Run `npm run build` to generate the library.
- Commit all the changes and either merge to develop or send a pull request.

## Tagging

- Run `git tag -a v1.0.0 -m "version 1.0.0"` where the version number is the one that needs to be updated
- Push tag to branch, i.e. `git push origin v1.0.0`
