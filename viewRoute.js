const express = require('express');
const viewcontroller = require('./viewController');
const app = express();
app.use(express.json());
const router = express.Router();
router.get('/',viewcontroller.landing);
router.get('/business',viewcontroller.business)
router.get('/entertainment',viewcontroller.entertainment)
router.get('/sports',viewcontroller.sports)
router.get('/science',viewcontroller.science)
router.get('/tech',viewcontroller.tech)
router.get('/health',viewcontroller.health)
router.get('/newsquery',viewcontroller.newsquery)


module.exports = router;