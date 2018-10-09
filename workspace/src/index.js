/* eslint-disable no-console */
/*
  Keep your logic out of this file. Just use it to start running your app
  This file is ignored in test coverage reports
*/
import App from './penthouse-cli'
import program from 'commander'

const app = new App()
app.clear()
app.sayHello()
app.getVersion().then(version => console.log(version))

const progWithOptions = program.version('0.1.2').usage('[options] <file ...>')

const options = [
  { command: '-u, --url', desc: 'Accessible url. Use file:/// protocol for local html files' },
  { command: '-C, --css-string', desc: 'Original css to extract critical css from' },
  { command: '-c, --css', desc: 'Path to original css file on disk (if using instead of cssString)' },
  { command: '-w, --width <n>', desc: 'Width for critical viewport (default 1300)', value: 1300 },
  { command: '-h, --height <n>', desc: 'Height for critical viewport (default 900)', value: 900 },
  { command: '-s, --screenshot <n>', desc: 'Configuration for screenshots (not used by default). See Screenshot example' },
  { command: '-M, --keep-larger-media-queries', desc: 'Keep media queries even for width/height values larger than critical viewport', value: false },
  { command: '-F, --force-include <list>', desc: 'Array of css selectors to keep in critical css, even if not appearing in critical viewport. Strings or regex (f.e. [\'.keepMeEvenIfNotSeenInDom\', /^.button/])', value: [] },
  { command: '-R, --properties-to-remove <list>', desc: 'Css properties to filter out from critical css', value: ['(.*)transition(.*)', 'cursor', 'pointer-events', '(-webkit-)?tap-highlight-color', '(.*)user-select'] },
  { command: '-t, --timeout', desc: 'abort critical CSS generation after this time', value: 30000 },
  { command: '-P, --puppeteer', desc: 'Settings for puppeteer. See Custom puppeteer browser example' },
  { command: '-T, --page-load-skip-timeout', desc: 'stop waiting for page load after this time (for sites when page load event is unreliable)' },
  { command: '-r, --render-wait-time', desc: 'wait time after page load before critical css extraction starts', value: 100 },
  { command: '-b, --block-js-requests', desc: 'set to false to load JS (not recommended)', value: true },
  { command: '-m, --max-embedded-base64-length', desc: 'characters; strip out inline base64 encoded resources larger than this', value: 1000 },
  { command: '-e, --max-elements-to-check-per-selector', desc: 'Can be specified to limit nr of elements to inspect per css selector, reducing execution time', value: undefined },
  { command: '-U, --user-agent', desc: 'specify which user agent string when loading the page', value: 'Penthouse Critical Path CSS Generator' },
  { command: '-H, --custom-page-headers', desc: 'Set extra http headers to be sent with the request for the url' },
  { command: '-S, --strict', desc: 'Make Penthouse throw on errors parsing the original CSS. Legacy option, not recommended', value: false },
]

options.reduce((prevVal, { command, desc, value }) => {
  // console.log(prevVal, command)
  return prevVal.option(command, desc, () => {}, value)
}, progWithOptions)

// function range(val) {
//   return val.split('..').map(Number)
// }

// function list(val) {
//   return val.split(',')
// }

// function collect(val, memo) {
//   memo.push(val)
//   return memo
// }

// function increaseVerbosity(v, total) {
//   return total + 1
// }

// program
//   .version('0.1.0')
//   .usage('[options] <file ...>')
//   .option('-i, --integer <n>', 'An integer argument', parseInt)
//   .option('-f, --float <n>', 'A float argument', parseFloat)
//   .option('-r, --range <a>..<b>', 'A range', range)
//   .option('-l, --list <items>', 'A list', list)
//   .option('-o, --optional [value]', 'An optional value')
//   .option('-c, --collect [value]', 'A repeatable value', collect, [])
//   .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
//   .parse(process.argv)


console.log(' int: %j', program.width, program.height)
// console.log(' float: %j', program.float)
// console.log(' optional: %j', program.optional)
program.range = program.range || []
// console.log(' range: %j..%j', program.range[0], program.range[1])
// console.log(' list: %j', program.list)
// console.log(' collect: %j', program.collect)
// console.log(' verbosity: %j', program.verbose)
// console.log(' args: %j', program.args)
