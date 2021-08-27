const userSchema = require('../models/user');
const router = require('./router');

// 611e8668d831d806a8e6b8e1 Tariq Brohi
// 6120b176abff672184efa233 Nasir
// 6120b2eeabff672184efa236 Asad
// 6120b36babff672184efa238 Khalil
// 6120b406abff672184efa23a Ahmad
router.get('/users', (req, res) => {
    userSchema.find({}, (err, users) => {
        if(err) {
            res.send(err);
        } else {
            res.send(users);
        }
    })
})

router.get('/user/:id', (req, res) => {
    let userID = req.params.id;
    userSchema.findById(userID, (err, user) => {
        if(err) {
            res.send(err);
        } else {
            res.send(user);
        }
    })
})

router.delete('/user/:id', (req, res) => {
    let userID = req.params.id;
    userSchema.findByIdAndDelete(userID, (err, user) => {
        if(err) {
            res.send(err);
        } else {
            res.send(user);
        }
    })
})

module.exports = router;