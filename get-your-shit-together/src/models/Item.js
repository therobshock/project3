const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true},
  type: { type: String, required: true },
  usefulness: { type: Number, required: true},
  feeling:  { type: Number, required: true }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;