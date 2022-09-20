const Router = require('express')
const router = new Router()
const authRouter = require('./authRouter')
const usersRouter = require('./usersRouter')

router.use('/auth', authRouter)
router.use('/users', usersRouter)
// router.use('/friends')
// router.use('/channels')

module.exports = router