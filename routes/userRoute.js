const express = require('express');
const router = express.Router();

const userController = require('../controller/user_controller');
const dummyMiddleware = require('../middleware/dummyMiddleware');

router.get('/name', (req, res) => {
    return res.json({
        "Name" : "Banty"
    });
})

router.get('/age', (req, res) => {
    return res.json({
        "age": 24
    });
})

router.get('/demoController', dummyMiddleware.middlware1, userController.demoFunction);
router.get('/demoController2', dummyMiddleware.middlware2, userController.demoFunction2);
router.post('/changeDataDemo', dummyMiddleware.changeMyData, userController.data);

module.exports = router;


