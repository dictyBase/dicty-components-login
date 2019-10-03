# dicty-components-login

[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](LICENSE)  
![GitHub tag](https://img.shields.io/github/v/tag/dictyBase/dicty-components-login)  
![GitHub action](https://github.com/dictyBase/dicty-components-login/workflows/Node%20CI/badge.svg)
[![codecov](https://codecov.io/gh/dictyBase/dicty-components-login/branch/develop/graph/badge.svg)](https://codecov.io/gh/dictyBase/dicty-components-login)  
[![Dependency Status](https://david-dm.org/dictyBase/dicty-components-login/develop.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-login/develop)
[![devDependency Status](https://david-dm.org/dictyBase/dicty-components-login/develop/dev-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-login/develop?type=dev)  
[![Technical debt](https://badgen.net/codeclimate/tech-debt/dictyBase/dicty-components-login)](https://codeclimate.com/github/dictyBase/dicty-components-login/trends/technical_debt)
[![Issues](https://badgen.net/codeclimate/issues/dictyBase/dicty-components-login)](https://codeclimate.com/github/dictyBase/dicty-components-login/issues)
[![Maintainability percentage](https://badgen.net/codeclimate/maintainability-percentage/dictyBase/dicty-components-login)](https://codeclimate.com/github/dictyBase/dicty-components-login)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=dictyBase/dicty-components-login)](https://dependabot.com)  
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
- Create a feature branch (feature/foo) or `bug/foo` or `documentation/foo` or
  `refactor/foo`, whatever suits the purpose of development
- To run a demo during development  
  `npm run start`
- Write tests in the same folder as the component.
- At the end of development, `npm run test:run` should pass.
- Write documentation using `styleguidist` and build it using `npm run styleguide:build`.
- Run `npm run build` to generate the library.
- Commit all the changes and send a pull request.

## Semantic Versioning

This app has been set up to use [semantic-release](https://github.com/semantic-release/semantic-release)
and [commitizen](https://github.com/commitizen/cz-cli). After adding a new commit
(`git add ...`), use `npm run cz` and follow the prompts to categorize and provide
more details about your commit. Once complete, push your changes to whatever branch
you are working on.

When you are ready to push to prod, you can use `semantic-release` to automate the
release process:

- Merge your changes into `master`
- Run `npx semantic-release`

**Important:** you MUST have an env variable stored for `GH_TOKEN` or `GITHUB_TOKEN`
that contains a GitHub [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).
You can either pass this in manually when you run the script (i.e. `GH_TOKEN=XXX npx semantic-release`)
or you can [store your env variable locally](https://www.schrodinger.com/kb/1842).

This will look at your most recent commits since the last `git tag` and automatically
determine the appropriate version number for your release.
