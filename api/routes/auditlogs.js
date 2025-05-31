const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        body: req.body,
        params: req.params,
        headers: req.headers,
        query: req.query
    });
});

module.exports = router;