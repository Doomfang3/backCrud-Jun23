const Character = require('../models/Character.model')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  const response = await Character.find()

  res.json(response)
})

/* GET to get one character */
router.get('/:characterId', async (req, res) => {
  //console.log(req.params)
  const character = await Character.findById(req.params.characterId)

  res.json(character)
})

/* POST to create one character */
router.post('/', async (req, res) => {
  const oneCharacter = await Character.create(req.body)
  res.status(201).json(oneCharacter)
})
/* PUT to update one character */

router.put('/:characterId', async (req, res) => {
  const updatedCharacter = await Character.findByIdAndUpdate(req.params.characterId, req.body, {
    new: true,
  })

  res.json(updatedCharacter)
})

/* DELETE to delete one character */
router.delete('/:characterId', async (req, res) => {
  await Character.findByIdAndDelete(req.params.characterId)

  res.status(202).json({ message: 'Character successfully deleted' })
})

module.exports = router
