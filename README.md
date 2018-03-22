# dicty-components-login

[![Travis][build-badge]][build]
[![Coveralls][coveralls-badge]][coveralls]
[![dependencies Status](https://david-dm.org/dictyBase/dicty-components-login/status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-login)
[![devDependencies Status](https://david-dm.org/dictyBase/dicty-components-login/dev-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-login?type=dev)
[![peerDependencies Status](https://david-dm.org/dictyBase/dicty-components-login/peer-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-login?type=peer)

React component for displaying the social login buttons in all dictyBase web applications.

## Install

`npm i dictyBase/dicty-components-login --save`

For a particular version(checks tags/release first)  
 `npm i dictyBase/dicty-components-login#v1.0.0 --save`

## Usage

`import {Login} from "dicty-components-login`

## Development

* Clone the `develop` branch of this repository
* Run `npm install`
* Create a feature branch(feature/foo) or `bug/foo` or `documentation/foo` or
  `refactor/foo`, whatever suits the purpose of development
* To run a demo during development  
  `npm run start`
* Write tests in the same folder as the component. Snapshot testing is recommended.
* At the end of development, `npm run test:run` should pass.
* Write documentation using `styleguidist` and build it using `npm run styleguide:build`.
* Run `npm run build` to generate the library.
* Commit all the changes and either merge to develop or send a pull request.

## Tagging

* Run `git tag -a v1.0.0 -m "version 1.0.0"` where the version number is the one that needs to be updated
* Push tag to branch, i.e. `git push origin v1.0.0`

[build-badge]: https://travis-ci.org/dictyBase/dicty-components-login.svg?branch=develop
[build]: https://travis-ci.org/dictyBase/dicty-components-login
[coveralls-badge]: https://coveralls.io/repos/github/dictyBase/dicty-components-login/badge.svg?branch=develop
[coveralls]: https://coveralls.io/github/dictyBase/dicty-components-login?branch=develop
