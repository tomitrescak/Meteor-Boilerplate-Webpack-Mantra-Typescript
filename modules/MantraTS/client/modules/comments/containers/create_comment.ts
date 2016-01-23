import {
  useDeps, composeWithTracker, composeAll
} from "../../../configs/mantra";
import Component from "../components/create_comment";

import { IContext } from "../../../configs/context";
import { IKomposer, IKomposerData } from "react-komposer";
 
export const composer: IKomposer = ({context, clearErrors}, onData: IKomposerData) => {
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
