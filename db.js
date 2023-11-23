const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/my_database_new', { useNewUrlParser: true });


mongoose.connect('mongodb+srv://Shivanshu-pathak-effectual:sonxy9-pipviP-mecxir@cluster0.sdiwr.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});


// const { MongoClient, ServerApiVersion } = require("mongodb");
// Replace the placeholder with your Atlas connection string
// const uri = "mongodb+srv://Shivanshu-pathak-effectual:sonxy9-pipviP-mecxir@cluster0.sdiwr.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri,  {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     }
// );
// async function run() {
//   try {
//     Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     Send a ping to confirm a successful connection
//     await client.db("test").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);