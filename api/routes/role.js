var express = require('express');
var router = express.Router();

const isAuthhenticated = true;

router.all("*", (req, res, next) => {
    if (isAuthhenticated) {
        next();
    }
    else {
        res.json({ success: false, eroor: "Not authenticated" })
    }
});

router.get("/", (req, res, next) => {
    res.json({ success: true });
});


module.exports = router;
