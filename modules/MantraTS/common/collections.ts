//import {Mongo} from 'meteor/mongo';

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

export const Posts = new Mongo.Collection('posts');
export const Comments = new Mongo.Collection('comments');
