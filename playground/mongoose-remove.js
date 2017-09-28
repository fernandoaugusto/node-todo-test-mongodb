const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findByIdAndRemove('59cc5c54e12c05a1149fa94a').then((todo) => {
//   console.log(todo);
// });

Todo.findOneAndRemove({_id: '59cc5d0d7c7914d214d0b3f4'}).then((todo) => {
  console.log(todo);
});
