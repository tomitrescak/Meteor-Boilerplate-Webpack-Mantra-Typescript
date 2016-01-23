import React from 'react';
//import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '../modules/core/components/layout.main.jsx';
import PostList from '../modules/core/containers/postlist';
import Post from '../modules/core/containers/post';
import NewPost from '../modules/core/containers/newpost';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  // Move these as a module and call this from a main file
  FlowRouter.route('/mantra', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.route('/mantra/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>)
      });
    }
  });

  FlowRouter.route('/mantra/new-post', {
    name: 'newpost',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost/>)
      });
    }
  });
}
