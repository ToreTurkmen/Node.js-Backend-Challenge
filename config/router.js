const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')


router.get('/', controller.homePage)
router.all('/add-feed', controller.postNewFeed)
router.get('/feed/:id', controller.showOneFeed)
router.all('/edit-feed/:id', controller.updateOneFeed)
router.get('/delete-feed/:id', controller.deleteOneFeed)



module.exports = router