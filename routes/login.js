var userSchema = require('../models/user.js');
var router = require('./router.js');
var jwt = require('jsonwebtoken');
router.get('/user/auth/:email/:password', (req, res) => {
    let username = req.params.email;
    let password = req.params.password;
    userSchema.findOne({ email: username }).exec(function (err, user) {
        if (err) {
            res.status(500).json({
                error: err
            });
        } else if (!user) {
            res.status(405).json({
                error: "User not found"
            })
        } else {
            user.comparePassword(password, function (matchError, isMatch) {
                if (matchError) {
                    res.status(500).json({
                        error: err
                    })
                } else if (!isMatch) {
                    res.status(404).json({
                        error: "Password does not match"
                    })
                } else {
                    jwt.sign(username, 'shhhhh', (er, token) => {
                        if (er) {
                            console.log(er);
                            res.status(500).json({
                                error: er
                            });
                        } else {
                            res.status(200).json({
                                token: token,
                                user_id: user._id
                            });
                        }
                    })
                }
            })
        }
    })




    // userSchema.findOne(loginUser, (err, user) => {
    //     if(err) {
    //         res.status(500).send("Page not found")
    //     } else {
    //         if(user) {
    //             jwt.sign(loginUser, 'shhhhh', {expiresIn: '1h'}, (err, token) => {
    //                 if(err) {
    //                     res.status(500).json({
    //                         error: err
    //                     });
    //                 } else {
    //                     res.status(200).json({
    //                         token: token
    //                     });
    //                 }
    //             })
    //         } else {
    //             res.status(404).send("User not found");
    //         }
    //     }
    // })
})

module.exports = router;