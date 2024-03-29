const { Schema, model } = require('mongoose');
export { };

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
})

module.exports = model("User", UserSchema);
