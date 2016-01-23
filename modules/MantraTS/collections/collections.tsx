// import {Mongo} from 'meteor/mongo';

export interface IPosts {
  _id: string;
  title: string;
  saving: string;
  content: string;
}

export interface IComments {
  _id: string;
  author: string;
  text: string;
  saving: boolean;
}

export interface ICollections {
  Posts: Mongo.Collection<IPosts>,
  Comments: Mongo.Collection<IComments>
}

export let Posts = new Mongo.Collection<IPosts>('posts');
export let Comments = new Mongo.Collection<IComments>('comments');

export default {
  Posts,
  Comments
};
