
const mongoose = require('mongoose')

let instance = null;
class Database {
    constructor() {
        if (!instance) {
            this.mongoConnection = null;
            instance = this;
        }

        return instance
    }

    async connect(options) {
        console.log("Database Conneting...")
        let db = mongoose.connect(options.CONNECTION_STRING)

        this.mongoConnection = db;
        console.log("Database Conneted!")
    }
}


module.exports = Database;