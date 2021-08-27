const port = 3001;
const router = require('./routes/router');
const db = require('./models/instance.js');
let routes = require('./routes');

router.listen(port, () => {
    console.log("Node server is up on port " + port);
})