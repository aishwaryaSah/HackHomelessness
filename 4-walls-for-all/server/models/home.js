const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const MongoClient = require('mongodb').MongoClient;

const homeSchema = new Schema({
  name: String,
  address: String,
  bed: String,
  password: String,
  ownername: String,
  owneridnumber: String,
  owneremail: String,
  ownercontactnumber: String
});

module.exports = mongoose.model('Home', homeSchema);
