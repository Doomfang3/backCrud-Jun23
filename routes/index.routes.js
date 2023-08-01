const router = require('express').Router()
const charactersRoutes = require('./characters')

router.get('/', (req, res, next) => {
  res.json('All good in here')
})

router.use('/characters', charactersRoutes)

module.exports = router
