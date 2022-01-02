const mongoose = require('mongoose');
const config = require('../config/database.json');

const DBConnect = async () => {
    try {
        const c = await mongoose.connect(`${config.database.type}://${config.database.username}:${config.database.password}@${config.database.host}/${config.database.name}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        mongoose.connection.on('disconnect', () => {
            console.warn(`[${new Date().toLocaleString()}] | Mongoose Has Lost Connect With The Apple Music`)
        });

        mongoose.connection.on("error", (err) => {
            console.error(`[${new Date().toLocaleString()}] | Mongoose Has Had An Error With The Data Being Saved: ` + err);
        });

        console.log(`[${new Date().toLocaleString()}] | Database Has Connected: ` + c.connection.host);
    } catch (e) {
        console.error(`[${new Date().toLocaleString()}] | Their Has Been An Error:` + `${e}`)
        process.exit(1)
    }
}

module.exports = DBConnect