const express = require('express');

const router = express.Router();

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

module.exports = router;


