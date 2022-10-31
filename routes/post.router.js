const Router = require('express');
const router = new Router();

const postControlles = require('../controller/post.controlles');

router.post('/post', postControlles.createPost);
router.get('/post', postControlles.getPostsByUser);


module.exports = router;