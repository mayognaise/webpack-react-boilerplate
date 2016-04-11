import express from 'express'
const router = express.Router()

router.use('/admin', require('./admin'))

router.get('/', (req, res, next) => {
  res.render('index', { page: 'main' })
})

module.exports = router