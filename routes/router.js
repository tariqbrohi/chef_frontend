let express = require('express');
let router = express();
router.use(express.urlencoded({extended: true}));
router.use(express.json());
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

module.exports = router;