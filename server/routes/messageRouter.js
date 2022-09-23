const Router = require('express')
const router = new Router()
const messageController = require('../controllers/messageController')

router.get('/all', messageController.getAll)
router.post('/create', messageController.create)

module.exports = router