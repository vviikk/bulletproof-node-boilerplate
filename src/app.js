import chalk from 'chalk'
import fs from 'fs'
import { name } from '../package.json'
import { promisify } from 'util'

const readFileAsync = promisify(fs.readFile)

export default class App {
  clear() {
    process.stdout.write('\x1Bc')
  }

  sayHello() {
    console.log(`App: ${chalk.green(name)} successfully started`)
  }

  async getVersion() {
    return JSON
      .parse(await readFileAsync(`${process.cwd()}/package.json`, 'utf8')).version
  }
}
