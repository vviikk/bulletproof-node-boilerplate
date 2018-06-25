# Create Node App

Lean, and functional boilerplate to get you started with creating a nodejs app. You have ES6/7, corresponding linting rules, a debugging config for `vscode`, Jest test runner.

No tie-up with any plugins like Express and the likes. It's a barebones NodeJS app with live-reload, testing, test-coverage and a simple TravisCI build.

It is also a good base for your CLI apps and is designed to be:

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
- `create-node-app` cli tool

## Debug in vscode

![Debug using VSCode](./assets/debug-vscode.png "Debug using F5 in vscode")

### Using NVM? Got you covered

![Debug with nvm version in .nvmrc](./assets/debug-vscode-choices.png "Debug using F5 in vscode")

Progress Tracker

- [ ] use `create-new-cli` to provision node app
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
