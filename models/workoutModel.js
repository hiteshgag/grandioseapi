const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  banner_image: {
    type: String,
    required: true
  },
  banner_id: {
    type: Number,
    required: true
  },   
}, { timestamps: true })

module.exports = mongoose.model('Banner', workoutSchema)