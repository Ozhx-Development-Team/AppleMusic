const fs = require('fs')

//@GET Grab's Data From The Error Function and makes a Log File
function Logging(data) {
    fs.appendFile(`../bin/error.log`, `[${new Date().toLocaleString()}] | ${data}\n`, (err) => {});
}

module.exports = Logging;