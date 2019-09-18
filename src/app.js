import express from 'express'
import customEnv from 'custom-env'
import router from './router'

const app = express()
const env = app.get('env')
console.log('the environment is: ', env)
customEnv.env(env)

const port = process.env.PORT || '3000'

app.use('/', router)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

export default app
