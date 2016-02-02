import NewPost from '../components/newpost';
import {useDeps, composeWithTracker, composeAll, IKomposer, IKomposerData, IDepsMapper} from 'mantra-core';



export const composer: IKomposer = ({context, clearErrors}, onData: IKomposerData) => {
  const {LocalState} = context();
  const error = LocalState.get('SAVING_ERROR');
  onData(null, {error});

  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper: IDepsMapper = (context, actions) => ({
  create: actions.posts.create,
  clearErrors: actions.posts.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewPost);
