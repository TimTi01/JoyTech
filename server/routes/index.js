const Router = require('express')
const router = new Router()
const authRouter = require('./authRouter')
const usersRouter = require('./usersRouter')
const channelsRouter = require('./channelsRouter')
const messageRouter = require('./messageRouter')
const friendsRouter = require('./friendsRouter')

router.use('/auth', authRouter)
router.use('/users', usersRouter)
router.use('/friends', friendsRouter)
router.use('/channels', channelsRouter)
router.use('/messages', messageRouter)

module.exports = router