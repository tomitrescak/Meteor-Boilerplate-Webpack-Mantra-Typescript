import React from 'react';
import {injectDeps} from 'react-simple-di';
//import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '../components/layouts.main/index.jsx';
import PostList from '../containers/postlist';
import Post from '../containers/post';
import NewPost from '../containers/newpost';

export const initRoutes = (context, actions) => {
  const MainLayoutCtx = injectDeps(context, actions)(MainLayout);

  console.log("initiiiianain");

  // Move these as a module and call this from a main file
  FlowRouter.route('/mantra', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.route('/matra/post/:postId', {
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
};
