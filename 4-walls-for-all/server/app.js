const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect(
    'mongodb+srv://siddhi:test123@homeless-hackathon-zvarv.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('connected to DB');
  });

exports.test = function(req, res) {
  res.render('test');
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
