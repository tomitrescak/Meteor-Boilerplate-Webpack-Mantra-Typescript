import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/create_comment';

import { IKomposer, IKomposerData } from "mantra-core";
import { IContext } from "../../../configs/context";

export const composer: IKomposer = ({context, clearErrors, postId}, onData: IKomposerData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_COMMENT_ERROR');
  onData(null, {error});

  return clearErrors;
};

export const depsMapper = (context: IContext, actions: any) => ({
  create: actions.comments.create,
  clearErrors: actions.comments.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
