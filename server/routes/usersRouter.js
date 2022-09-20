const Router = require('express')
const router = new Router()
const usersController = require('../controllers/usersController')

// api/users/
router.get('/all', usersController.getAll)
// router.put('/edit/:id', usersController.editOne)

module.exports = router