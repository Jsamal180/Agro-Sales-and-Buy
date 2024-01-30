exports.middlware1 = (req, res, next) => {
    console.log("Middleware 1 called");
    next();
}

exports.middlware2 = (req, res, next) => {
    console.log("Middleware 2 called");
    return res.json({
        "message": "middlware2 called"
    })
}

exports.changeMyData = (req, res, next) => {
    // data = req.body.data;
    // newData = data + 5;
    // req.body.data = newData;
    req.body.data += 5;
    next();
}
