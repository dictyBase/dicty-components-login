# dicty-components-login

[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](LICENSE)  
![GitHub tag](https://img.shields.io/github/v/tag/dictyBase/dicty-components-login)  
![GitHub action](https://github.com/dictyBase/dicty-components-login/workflows/Testing/badge.svg)
[![codecov](https://codecov.io/gh/dictyBase/dicty-components-login/branch/develop/graph/badge.svg)](https://codecov.io/gh/dictyBase/dicty-components-login)  
[![Dependency Status](https://david-dm.org/dictyBase/dicty-components-login/develop.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-login/develop)
[![devDependency Status](https://david-dm.org/dictyBase/dicty-components-login/develop/dev-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-login/develop?type=dev)  
[![Technical debt](https://badgen.net/codeclimate/tech-debt/dictyBase/dicty-components-login)](https://codeclimate.com/github/dictyBase/dicty-components-login/trends/technical_debt)
[![Issues](https://badgen.net/codeclimate/issues/dictyBase/dicty-components-login)](https://codeclimate.com/github/dictyBase/dicty-components-login/issues)
[![Maintainability percentage](https://badgen.net/codeclimate/maintainability-percentage/dictyBase/dicty-components-login)](https://codeclimate.com/github/dictyBase/dicty-components-login)  
![Issues](https://badgen.net/github/issues/dictyBase/dicty-components-login)
![Open Issues](https://badgen.net/github/open-issues/dictyBase/dicty-components-login)
![Closed Issues](https://badgen.net/github/closed-issues/dictyBase/dicty-components-login)
![Total PRS](https://badgen.net/github/prs/dictyBase/dicty-components-login)
![Open PRS](https://badgen.net/github/open-prs/dictyBase/dicty-components-login)
![Closed PRS](https://badgen.net/github/closed-prs/dictyBase/dicty-components-login)
![Merged PRS](https://badgen.net/github/merged-prs/dictyBase/dicty-components-login)  
![Commits](https://badgen.net/github/commits/dictyBase/dicty-components-login/develop)
![Last commit](https://badgen.net/github/last-commit/dictyBase/dicty-components-login/develop)
![Branches](https://badgen.net/github/branches/dictyBase/dicty-components-login)
![Tags](https://badgen.net/github/tags/dictyBase/dicty-components-login)
![GitHub repo size](https://img.shields.io/github/repo-size/dictyBase/dicty-components-login?style=plastic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dictyBase/dicty-components-login?style=plastic)
[![Lines of Code](https://badgen.net/codeclimate/loc/dictyBase/dicty-components-login)](https://codeclimate.com/github/dictyBase/dicty-components-login/code)  
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
- Create a new branch (i.e. `feature/foo-plugin`)
- Complete any necessary work.
- If creating a new plugin, there is a [guide](./documentation/bold.md) that
  walks you through the process using the bold plugin as a guide.
- Commit all changes and open a pull request. If all checks pass, it is ready
  to merge to `develop`.

If you are ready to cut a new release, you can then merge into `master`. This
will trigger a GitHub Action that uses `semantic-release` to create a new tag
automatically.
