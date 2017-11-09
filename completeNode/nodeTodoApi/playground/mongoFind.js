const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  db
    .collection("Todos")
    .find()
    .toArray()
    .then(todos => {
      console.log("Todos:");
      console.log(JSON.stringify(todos, undefined, 2));
    })
    .catch(err => {
      console.log("Unable to fetch todos", err);
    });

  db.close();
});
