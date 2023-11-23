const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/my_database_new', { useNewUrlParser: true });


mongoose.connect('mongodb+srv://Shivanshu-pathak-effectual:sonxy9-pipviP-mecxir@cluster0.sdiwr.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});