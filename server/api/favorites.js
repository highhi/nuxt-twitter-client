const { Router } = require('express')
const router = Router()
const twitter = require('../libs/twitter')

router.get('/:id', async (req, res, next) => {
  try {
    const tweets = await twitter.get('favorites/list', { user_id: req.params.id })
    res.json(tweets)
  } catch(err) {
    next(err)
  }
})

router.post('/create', async (req, res, next) => {
  try {    
    const tweet = await twitter.post('favorites/create', { id: req.body.id })
    res.json(tweet)
  } catch(err) {
    next(err)
  }
})

module.exports = router
  