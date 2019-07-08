const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const cinemaSchema = new Schema({
  title: String,
  director: String,
  stars: {type:Array},
  image: String,
  description: String,
  showtimes:{type:Array}

});

const cinemaMod = mongoose.model("cinemaSchema", cinemaSchema);

module.exports = cinemaMod;

