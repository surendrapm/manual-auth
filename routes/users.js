const express = require('express')

const router = express.Router()
const userscontroller = require('../controllers/users_controllers')

router.get('/profile',userscontroller.profile)

module.exports = router;