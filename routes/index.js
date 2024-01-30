const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    return res.json({
        "message" : "Successfully loaded the router!"
    });
})

router.use('/users', require('./userRoute'));
module.exports = router;
