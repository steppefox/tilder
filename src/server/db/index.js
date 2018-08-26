const mongoose = require('mongoose');

function initDatabaseConnection() {
  mongoose.connect('mongodb://127.0.0.1:27017/tilder', {
    useNewUrlParser: true,
  });

  const connection = mongoose.connection;
  connection.on('error', console.error.bind(console, 'connection error:'));
  connection.once('open', function() {
    console.log('Connected!')
  });
}

module.exports = initDatabaseConnection;
