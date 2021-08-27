var userSchema = require('../models/user.js');
var router = require('./router.js');
var jwt = require('jsonwebtoken');
router.post('/user/auth', (req, res) => {
    let user = new userSchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        gender: req.body.gender,
    })
    user.save((err) => {
        if(err) {
            res.json({
                error: err
            });
        } else {
            console.log("Check1");
            jwt.sign({
                username: req.body.email,
                password: req.body.password
            },
            'shhhhh', (error, token) => {
                if(error) {
                    console.log(error);
                    res.status(500).json({
                        error: error
                    });
                } else {
                    console.log(token);
                    res.status(200).json({
                        token: token
                    });
                }
            })
        }
    });
});

module.exports = router;