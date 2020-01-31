const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const MongoClient = require('mongodb').MongoClient;
const residentSchema = new Schema({
  name: String,
  idproofnumber: String,
  dob: String,
  gender: String,
  homeId: String
});

//module.exports = MongoClient.model('Resident', residentSchema);

module.exports = mongoose.model('Resident', residentSchema);
