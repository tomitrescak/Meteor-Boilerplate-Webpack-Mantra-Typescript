export default {
  create({Meteor, LocalState}, postId: string, text: string) {
    LocalState.set('CREATE_COMMENT_ERROR', null);
    if (!text) {
      LocalState.set('CREATE_COMMENT_ERROR', 'Comment text is required.');
      return;
    }

    const id = Meteor.uuid();
    Meteor.call('posts.createComment', id, postId, text, (err: any) => {
      if (err) {
        alert(`Post creating failed: ${err.message}`);
      }
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('CREATE_COMMENT_ERROR', null);
  }
};
