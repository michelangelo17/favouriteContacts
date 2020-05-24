const router = require('express-promise-router')(),
  { valBody, checkUserAccess } = require('./middleware'),
  { errorHandling } = require('../middleware'),
  { addFriend, editFriend, deleteFriend, allFriends } = require('./dbQueries')

module.exports = router

router.get('/', async (req, res) =>
  res.json(await allFriends(req.decodedToken.subject))
)

router.post('/', valBody, async (req, res) =>
  res
    .status(201)
    .json(await addFriend({ ...req.body, user_id: req.decodedToken.subject }))
)

router.put('/:id', checkUserAccess, valBody, async (req, res) =>
  res.json(
    await editFriend(req.params.id, {
      ...req.body,
      user_id: req.decodedToken.subject,
    })
  )
)

router.delete('/:id', checkUserAccess, async (req, res) =>
  res.json(await deleteFriend(req.params.id, req.decodedToken.subject))
)

router.use(errorHandling)
