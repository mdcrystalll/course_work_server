const Router = require('express')
const router = new Router()
const peopleController = require('../controllers/peopleController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), peopleController.create)
router.get('/',peopleController.getAll)

module.exports = router