const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserModel = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = UserModel = mongoose.model("User", UserModel);