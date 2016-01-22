import Tasks from '../collections/Tasks';

// This code only runs on the server
Meteor.publish('tasks', function () {
  return Tasks.find({
    $or: [
      { private: {$ne: true} },
      { owner: this.userId }
    ]
  });
});

Meteor.publish('alltasks', function () {
  return Tasks.find();
});
