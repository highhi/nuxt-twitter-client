const { Router } = require('express')
const router = Router()
const twitter = require('../libs/twitter')

router.get('/', async (_, res, next) => {
  try {
    const tweets = await twitter.get('statuses/home_timeline', { count: 10 })
    res.json(tweets)
  } catch(err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const tweets = await twitter.get('statuses/user_timeline', {
      user_id: req.params.id,
      count: 10
    })
    res.json(tweets)
  } catch(err) {
    next(err)
  }
})

module.exports = router
