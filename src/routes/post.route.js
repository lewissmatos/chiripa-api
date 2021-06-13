const Router = require('express')

const postCtrl = require('../controllers/post.controller')

const router = Router()

router.get('/', postCtrl.getAllPosts)

router.get('/:id', postCtrl.getPostById)

router.get('/:user-id', postCtrl.getPostsByUserLogged)

router.get('/user-area', postCtrl.getPostsByUserArea)

router.post('/', postCtrl.createPost)

router.put('/:id', postCtrl.editPostById)

router.delete('/:id', postCtrl.deletePostById)

module.exports = router