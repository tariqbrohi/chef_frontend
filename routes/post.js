const router = require('./router');
const postSchema = require('../models/post');
const instances = require('../models/instance');
const fs = require('fs');
const path= require('path');
router.post('/post', instances.upload.single('image'), (req, res, next) => {
    console.log(req.body);
    console.log(req.file)
    let post = new postSchema({
        userId: req.body.userId,
        description: req.body.description,
        img: req.body.file + ''
    });
    postSchema.create(post, (err, postRes) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json({
                post: postRes
            })
        }
    })
});


router.get('/posts/:userID', (req, res, next) => {
    res.send("User Posts");
})

router.delete('/post/:id', (req, res, next) => {
    let id = req.params.id;
    postSchema.findByIdAndDelete(id, (err, post) => {
        if(err) {
            res.status(500).json({
                error: err
            })
        } else {
            res.status(200).json({
                post: post
            })
        }
    })
})

router.delete('/posts', (req, res, next) => {
    postSchema.deleteMany({}, (err, post) => {
        if(err) {
            res.status(500).json({
                error: err
            })
        } else {
            res.status(200).json({
                post: post
            })
        }
    })
})

router.get('/posts', (req, res, next) => {
    postSchema.find({}, (err, posts) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json({
                posts: posts
            })
        }
    })
})

router.post('/imgTest',instances.upload.single('image'), (req, res) => {
    console.log(req.body);
    console.log(req.file.filename);
    res.send(req.file.filename);
})


module.exports = router;