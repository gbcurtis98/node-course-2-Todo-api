// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
 (err, db) => {
   if (err) {
     return console.log('Unable to connect to MongoDB server');
   }
   console.log('Connected to MongoDB');
// NOTE: deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
// NOTE: deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });
// NOTE: findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
//   console.log(result);
// });

// db.collection('Users').deleteMany({name: 'Greg Curtis'});
db.collection('Users').deleteOne({name: 'Jen'}).then((result) => {
  console.log(result);
});
// NOTE: db.close();
});
