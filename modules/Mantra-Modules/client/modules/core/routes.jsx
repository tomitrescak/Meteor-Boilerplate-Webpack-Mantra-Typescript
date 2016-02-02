import React from 'react';
import {mount} from 'react-mounter';

//import {FlowRouter} from 'meteor/kadira:flow-router';
 
import MainLayout from 'Mantra-Modules/client/modules/core/components/layout.main.jsx';
import PostList from 'Mantra-Modules/client/modules/core/containers/postlist';
import Post from 'Mantra-Modules/client/modules/core/containers/post';
import NewPost from 'Mantra-Modules/client/modules/core/containers/newpost';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  // Move these as a module and call this from a main file
  FlowRouter.route('/', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>)
      });
    }
  });

  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost/>)
      });
    }
  });
}
