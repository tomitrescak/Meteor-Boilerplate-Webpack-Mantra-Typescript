import PostList from '../components/postlist';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

import { IContext } from "../../../configs/context";
import { IKomposer, IKomposerData } from "react-komposer";

export const composer: IKomposer = ({ context }, onData: IKomposerData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.list').ready()) {
    const posts = Collections.Posts.find().fetch();
    onData(null, {posts});
  }
  return null;
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(PostList);
