const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const characterSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    health: { type: Number, required: true },
    role: { type: String, required: true, trim: true },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Character = model('Character', characterSchema)

module.exports = Character
