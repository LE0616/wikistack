const express = require("express");
const router = express.Router();

router.use(function(req, res, next) {

    next();
});

router.get('/', (req, res, next) => {
    res.send('got to GET /wiki/');
});

router.post('/', (req, res, next) => {
    res.send('got to POST /wiki/');
});

router.get('/add', (req, res, next) => {
    res.send('got to GET /wiki/add');
});

module.exports = router;