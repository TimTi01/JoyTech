const Router = require('express')
const router = new Router()
const channelsController = require('../controllers/channelsController')

router.get('/all', channelsController.getAll)
router.post('/create', channelsController.create)

module.exports = router