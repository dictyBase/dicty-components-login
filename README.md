# dicty-components-login

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](LICENSE)  
![GitHub tag](https://img.shields.io/github/v/tag/dictyBase/dicty-components-login)
![GitHub action](https://github.com/dictyBase/dicty-components-login/workflows/Node%20CI%20Develop/badge.svg)  
[![codecov](https://codecov.io/gh/dictyBase/dicty-components-login/branch/develop/graph/badge.svg)](https://codecov.io/gh/dictyBase/dicty-components-login)
[![Maintainability](https://badgen.net/codeclimate/maintainability/dictyBase/dicty-components-login)](https://codeclimate.com/github/dictyBase/dicty-components-login)  
![Last commit](https://badgen.net/github/last-commit/dictyBase/dicty-components-login/develop)  
[![Funding](https://badgen.net/badge/Funding/Rex%20L%20Chisholm,dictyBase,DCR/yellow?list=|)](https://reporter.nih.gov/project-details/10024726)

This is a ReScript library that generates React components for social login buttons used in
all dictyBase web applications.

## Usage

`import { GoogleButton, LinkedInButton, OrcidButton } from "dicty-components-login"`

This component expects the following props to be passed:

- `text`: text to display inside button
- `handleClick`: function called when the user clicks a button

For example, `<GoogleButton handleClick={(e) => console.log(e)} text="Login with Google" />`

## Demo

There is a demo app inside the `example` that shows how to use this library in a `create-react-app` application.

Run `yarn start` to start the demo.

If there are issues running the demo app, check its readme for possible solutions.

## Development

- Clone the `develop` branch of this repository.
- Run `yarn` to install.
- Create a new branch (i.e. `feature/foo-plugin`)
- Complete any necessary work.
- Run `yarn bundle` to generate updated code and esbuild output.
- Commit all changes and open a pull request. If all checks pass, it is ready
  to merge to `develop`.

For active local development, run `yarn start` to start the demo app, then run `yarn bundle`
any time you make changes to see them in realtime.

If you are ready to cut a new release, you can then merge into `master`. This
will trigger a GitHub Action that uses `semantic-release` to create a new tag
automatically.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://cybersiddhu.github.com/"><img src="https://avatars3.githubusercontent.com/u/48740?v=4" width="100px;" alt=""/><br /><sub><b>Siddhartha Basu</b></sub></a><br /><a href="https://github.com/dictyBase/dicty-components-login/issues?q=author%3Acybersiddhu" title="Bug reports">🐛</a> <a href="https://github.com/dictyBase/dicty-components-login/commits?author=cybersiddhu" title="Code">💻</a> <a href="#content-cybersiddhu" title="Content">🖋</a> <a href="https://github.com/dictyBase/dicty-components-login/commits?author=cybersiddhu" title="Documentation">📖</a> <a href="#maintenance-cybersiddhu" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Misc badges

![Issues](https://badgen.net/github/issues/dictyBase/dicty-components-login)
![Open Issues](https://badgen.net/github/open-issues/dictyBase/dicty-components-login)
![Closed Issues](https://badgen.net/github/closed-issues/dictyBase/dicty-components-login)  
![Total PRS](https://badgen.net/github/prs/dictyBase/dicty-components-login)
![Open PRS](https://badgen.net/github/open-prs/dictyBase/dicty-components-login)
![Closed PRS](https://badgen.net/github/closed-prs/dictyBase/dicty-components-login)
![Merged PRS](https://badgen.net/github/merged-prs/dictyBase/dicty-components-login)  
![Commits](https://badgen.net/github/commits/dictyBase/dicty-components-login/develop)
![Branches](https://badgen.net/github/branches/dictyBase/dicty-components-login)
![Tags](https://badgen.net/github/tags/dictyBase/dicty-components-login)  
![GitHub repo size](https://img.shields.io/github/repo-size/dictyBase/dicty-components-login?style=plastic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dictyBase/dicty-components-login?style=plastic)
[![Lines of Code](https://badgen.net/codeclimate/loc/dictyBase/dicty-components-login)](https://codeclimate.com/github/dictyBase/dicty-components-login/code)
