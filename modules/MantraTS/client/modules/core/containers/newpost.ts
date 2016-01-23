import NewPost from '../components/newpost';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

import { IContext } from "../../../configs/context";
import { IKomposer, IKomposerData } from "react-komposer";

export const composer: IKomposer = ({ context, clearErrors }, onData: IKomposerData) => {
  const {LocalState} = context();
  const error = LocalState.get('SAVING_ERROR');
  onData(null, {error});

  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context: IContext, actions: any) => ({
  create: actions.posts.create,
  clearErrors: actions.posts.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewPost);
