import { name, version } from '../package.json'
import App from './app'
import chalk from 'chalk'

describe('App', () => {
  const app = new App()
  it('should say hello when told', () => {
    spyOn(console, 'log')
    app.sayHello()
    expect(console.log).toHaveBeenCalledWith(`App: ${chalk.green(name)} successfully started`)
  })

  it('should clear the console when told', () => {
    spyOn(process.stdout, 'write')
    app.clear()
    expect(process.stdout.write).toHaveBeenCalledWith('\x1Bc')
  })

  // async/await can be used.
  it('works with async/await', async () => {
    expect.assertions(1)
    const data = await app.getVersion()
    expect(data).toEqual(version)
  })

  // async/await can also be used with `.resolves`.
  it('works with async/await and resolves', async () => {
    expect.assertions(1)
    await expect(app.getVersion()).resolves.toEqual(version)
  })
})
