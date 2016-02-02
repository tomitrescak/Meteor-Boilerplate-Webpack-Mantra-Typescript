import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/comment_list';

import { IContext } from "../../../configs/context";
import { IKomposer, IKomposerData } from "mantra-core";

export const composer: IKomposer = ({context, clearErrors, postId}, onData: IKomposerData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.comments', postId).ready()) {
    const options = {
      sort: {createdAt: -1}
    };
    const comments = Collections.Comments.find({postId}, options).fetch();
    onData(null, {comments});
  } else {
    onData();
  }

  return clearErrors;
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Component);
