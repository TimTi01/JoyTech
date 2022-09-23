const Router = require('express')
const router = new Router()
const friendsController = require('../controllers/friendsController')

// api/users/
router.get('/all', friendsController.getAll)
router.post('/create', friendsController.create)

module.exports = router