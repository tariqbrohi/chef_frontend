let loginRoutes = require('./login');
let signupRoutes = require('./signup');
let userRoutes = require('./user');
let tokenRoute = require('./token');
let postsRoutes = require('./post'); 
module.exports =  {
    loginRoutes,
    signupRoutes,
    userRoutes,
    tokenRoute,
    postsRoutes
}