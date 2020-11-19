import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/redditclone', { useNewUrlParser: true, useUnifiedTopology: true, });

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Users', userSchema)