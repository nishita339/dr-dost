const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/doctorDatabase');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },  // Fixed type definition
    password: { type: String, required: true }, // Fixed type definition
    UserDetail: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "userDetail"
    }]
});

module.exports = mongoose.model('User', UserSchema);