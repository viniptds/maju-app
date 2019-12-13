var client = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017/tablemanager';


// Create a new MongoClient
//const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(url, function(err) {

  assert.equal(null, err);
  console.log("Connected successfully to server");

  return client;
});


function insert(obj, model)
{
    db.collection(model).insertOne(obj, function(err, res) {  
        if (err) 
        {
            return false;
        }
        return true;
    });
}