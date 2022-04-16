const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err || !db) {
                return callback(err);
            }
            _db = db.db("high_scores");
            console.log("Successfully connected to the Shooty2a Database.");

            return callback();
        });
    },

    getDb: function () {
        console.log(_db);
        return _db;
    },
};