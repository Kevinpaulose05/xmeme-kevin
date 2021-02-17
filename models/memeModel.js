const mongoose = require("mongoose");
// const toJson = require('@meanie/mongoose-to-json');
 
// mongoose.plugin(toJson);

const memeSchema = new mongoose.Schema({
  name: String,
  caption: String,
  url: String,
  time: {
    type: Date,
    default: Date.now,
    // select: false
  },
  __v: { type: Number, select: false}
});

// Duplicate the ID field.
memeSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialized.
memeSchema.set('toJSON', {
  virtuals: true
});

// memeSchema.plugin(toJson);

const Meme = mongoose.model("Meme", memeSchema);

module.exports = Meme;
