import {
  useDeps, composeWithTracker, composeAll
} from '../../../configs/mantra';
import Component from '../components/comment_list';

import { IContext } from "../../../configs/context";
import { IKomposer, IKomposerData } from "react-komposer";

export const composer: IKomposer = ({context, clearErrors, postId}, onData: IKomposerData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.comments', postId).ready()) {
    const options = {
      sort: {createdAt: -1}
    };
    const comments = Collections.Comments.find({ postId }, options).fetch();
    onData(null, {comments});
  } else {
    onData();
  }
  return null;
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Component);
