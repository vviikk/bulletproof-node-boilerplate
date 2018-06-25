/* eslint-disable no-console */
/*
  Keep your logic out of this file. Just use it to start running your app
  This file is ignored in test coverage reports
*/
import App from './app'

const app = new App()
app.clear()
app.sayHello()
app.getVersion().then(version => console.log(version))
