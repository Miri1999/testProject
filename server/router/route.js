const router = require('express').Router();
const UserController = require('../controller/user');

router.post('/createUser', UserController.createUser);
router.get('/getAllUsers', UserController.getAllUsers);



module.exports = router;