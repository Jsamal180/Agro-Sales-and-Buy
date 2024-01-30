exports.demoFunction = (req, res) => {
    return res.json({
        "message": "Response from User Controller"
    });
}

exports.demoFunction2 = (req, res) => {
    return res.json({
        "message": "Response from User Controller second"
    });
}

exports.data = (req, res) => {
    return res.json({
        "newData": req.body.data
    });
}