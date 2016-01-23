import {Posts} from '../../../../../collections/collections';
//import {Meteor} from 'meteor/meteor';
//import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'posts.create'(_id: string, title: string, content: string) {
      check(_id, String);
      check(title, String);
      check(content, String);
 
      const createdAt = new Date();
      const post = {
        _id, title, content, createdAt,
        saving: true
      };
      Posts.insert(post);
    }
  });
}
