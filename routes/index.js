const Router = require('express')
const router = new Router()
const adminRouters = require('./adminRouters')
const userRouters = require('./userRouters')
const peopleRouters = require('./peopleRouters')

router.use('/user',userRouters)
router.use('/people',peopleRouters)
router.use('/admin',adminRouters)

module.exports = router