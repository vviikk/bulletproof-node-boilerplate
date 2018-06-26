# Bulletproof Nodejs Boilerplate

![Package version][package-version]
![Travis build status][travis]
[![License: Unlicense][unlicense-badge]][unlicense-link]
[![Coverage Status][coverall-badge]][coverall-link]
[![PRs Welcome][pr-welcome-badge]][pr-welcome-link]
[![Share on Twitter][twitter-share-button]][twitter-share-link]

Lean, and functional boilerplate to get you started with creating a nodejs app. You have ES6/7, corresponding linting rules, a debugging config for `vscode`, Jest test runner.

No tie-up with any plugins like Express and the likes. It's a barebones NodeJS app with live-reload, testing, test-coverage and a simple TravisCI build.

It is also a good base for your node or CLI apps and is designed to be:

- Compatible with latest LTS of node, but backwards compatible with Node 6 (you'll need to run `yarn run start:legacy`)
- Forward-thinking (async / await / object spreads and the likes)
- Debuggable (includes vscode debug config)
- Testable (check out the test file to see cool async tests)
- CI ready (Travis config included)
- NVM-friendly (see .nvmrc)

## Developer goodies

- `.editorconfig`
- relateable linting rules
- tests & test coverage
- `create-nodejs-app` cli tool (WIP)
- `live-reload` when you save a file.

## Get started

There are three ways of using this boilerplate.

1. [Download the release][release-link] and extract
2. Clone the repo without it's history:

    ```bash
    # clone this repo
    git clone --depth=1 --branch=master https://github.com/piggyslasher/bulletproof-node-boilerplate.git youNewProject

    rm -rf !$/.git #removes the .git directory
    ```

3. Use the `create-nodejs-app` (in progress :)

### To start the app

```bash
# To just run the script and see output
npm start # or
yarn start

# for development and live-reload
npm run start:watch #or
yarn run start:watch
```

## Debug in VSCode

![Debug using VSCode](./assets/debug-vscode.png "Debug using F5 in vscode")

### Using `nvm`? Got you covered

![Debug with nvm version in .nvmrc](./assets/debug-vscode-choices.png "Debug using F5 in vscode")

### Progress Tracker

- [ ] use `create-new-cli` to provision node app
- [X] maintain node version compatibility
  - [X] Latest LTS
  - [X] Node 6+
- [X] perform live-reload of all scripts using nodemon
- [X] provide testing using Jest
- [X] provide TravisCI basic testing
- [X] provide codacy stats
- [X] provide code coverage
- [X] provide sane linting rules (currently based on Airbnb but allows goodies like dangling commas and semi-colon-free development)
- [X] use async/await/promisify
- [X] support CLI tools (have a look at `bin/cli.js`)
- [ ] allow options for 3rd party linting rules (standard, airbnb)
- [X] debug using vscode's node debugger
  - [ ] use babel sourcemaps during debgging (workaround, use `debugger`)

[travis]: https://travis-ci.org/piggyslasher/bulletproof-node-boilerplate.svg?branch=master "TravisCI Build Status"
[twitter-share-link]: https://twitter.com/home?status=https%3A//github.com/piggyslasher/bulletproof-node-boilerplate%0A
[twitter-share-button]: https://img.shields.io/twitter/url/http/shields.io.svg?style=social
[coverall-badge]: https://coveralls.io/repos/github/piggyslasher/bulletproof-node-boilerplate/badge.svg?branch=master
[coverall-link]: https://coveralls.io/github/piggyslasher/bulletproof-node-boilerplate?branch=master
[package-version]: https://img.shields.io/github/package-json/v/badges/shields.svg
[unlicense-badge]: https://img.shields.io/badge/license-Unlicense-blue.svg
[unlicense-link]: http://unlicense.org/
[pr-welcome-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[pr-welcome-link]: http://makeapullrequest.com
[release-link]: https://github.com/piggyslasher/bulletproof-node-boilerplate/releases
