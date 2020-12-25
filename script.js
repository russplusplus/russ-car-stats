console.log('in script')

$(document).ready(() => {
    console.log('in jquery')

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://russ:<password>@cluster0.agp3h.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

})