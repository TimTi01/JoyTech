const Router = require('express')
const router = new Router()
const authRouter = require('./authRouter')

router.use('/auth', authRouter)
// router.use('/users')
// router.use('/friends')
// router.use('/channels')

module.exports = router