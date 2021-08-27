//Import the mongoose module
var mongoose = require('mongoose');
var multer = require('multer');
const path = require('path')
var fs = require('fs');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let Schema = mongoose.Schema;
//multer things
const imageConfig = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file);
        cb(null, './images')
        const dir = './images';
        fs.exists(dir, (exist) => {
            if (!exist) {
                return fs.mkdir(dir, (error) => cb(error, dir));
            }
            return cb(null, dir);
        });

    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: imageConfig })
module.exports = {
    db,
    Schema,
    mongoose,
    upload,
    multer
};
