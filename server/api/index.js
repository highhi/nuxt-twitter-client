const { Router } = require('express')
const timeline = require('./timeline')
const favorites = require('./favorites')
const router = Router()

router.use('/timeline', timeline)
router.use('/favorites', favorites)

module.exports = router
