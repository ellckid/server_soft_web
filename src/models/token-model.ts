const { Schema, model } = require('mongoose');
export { };

const TokenSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "user" },
    refreshToken: { type: String, required: true },
})

module.exports = model("Token", TokenSchema);
