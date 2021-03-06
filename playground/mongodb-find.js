// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
 (err, db) => {
   if (err) {
     return console.log('Unable to connect to MongoDB server');
   }
   console.log('Connected to MongoDB');

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  // db.collection('Users').find({name: 'Greg Curtis'}).count().then((count) => {
  //   console.log(`Users named Greg Curtis: ${count}`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch users.', err);
  // });
  db.collection('Users').find({name: 'Greg Curtis'})
    .toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users.', err);
  });
});
