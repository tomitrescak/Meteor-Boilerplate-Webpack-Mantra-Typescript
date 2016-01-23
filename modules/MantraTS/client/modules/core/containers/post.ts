import Post from '../components/post';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

import { IContext } from "../../../configs/context";
import { IKomposer, IKomposerData } from "react-komposer";

export const composer: IKomposer = ({context, postId}, onData: IKomposerData) => {
  const {Meteor, Collections, Tracker} = context();

  Meteor.subscribe('posts.single', postId, () => {
    const post = Collections.Posts.findOne(postId);
    onData(null, {post});
  });

  // support latency compensation
  //  we don't need to invalidate tracker because of the
  //  data fetching from the cache.
  const postFromCache = Tracker.nonreactive(() => {
    return Collections.Posts.findOne(postId);
  });

  if (postFromCache) {
    onData(null, {post: postFromCache});
  } else {
    onData();
  }

  return null;
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Post);
