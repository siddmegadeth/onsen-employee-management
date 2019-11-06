(function () {
    log = module.exports = console.log.bind(console);
    http = module.exports = require("http");
    express = module.exports = require("express");
    app = module.exports = express();
    bodyParser = module.exports = require("body-parser");
    mongoose = module.exports = require("mongoose");
    cors = module.exports = require("cors");
    Schema = module.exports = mongoose.Schema;

})();