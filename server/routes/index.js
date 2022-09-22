const Router = require('express')
const router = new Router()
const authRouter = require('./authRouter')
const usersRouter = require('./usersRouter')
const channelsRouter = require('./channelsRouter')

router.use('/auth', authRouter)
router.use('/users', usersRouter)
// router.use('/friends')
router.use('/channels', channelsRouter)

module.exports = router