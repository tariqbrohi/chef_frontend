var router = require('../routes/router');
var jwt = require('jsonwebtoken');

router.get('/auth/:token', (req, res) => {
    let token = req.params.token;
    jwt.verify(token, 'shhhhh', (err, decode) => {
        if(err) {
            res.status(403).json(err)
        } else {
            res.status(200).json({
                decode: decode
            })
        }
    })
})

module.export = router;