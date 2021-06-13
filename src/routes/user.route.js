const {Router} = require('express')
const userCtrl = require('../controllers/user.controller')

const router = Router()

router.get('/', userCtrl.getAllUsers)

router.get('/:id', userCtrl.getUserById)

router.get('/current-user', userCtrl.getCurrentUser)

router.put('/:id', userCtrl.editUserById)

router.delete('/:id', userCtrl.deleteUserById)

module.exports = router