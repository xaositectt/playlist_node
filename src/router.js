import express from 'express'

const router = express.Router()

router.get('/hello_world', (req, res) => {
  res.send({ msg: 'hello world' }).status(200)
})

export default router
