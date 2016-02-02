import React from 'react';
import {mount} from 'react-mounter';

//import {FlowRouter} from 'meteor/kadira:flow-router';

import MainLayout from './components/layout.main';
import PostList from './containers/postlist';
import Post from './containers/post';
import NewPost from './containers/newpost';

import { IInjectDeps } from "mantra-core";

export default function (injectDeps: IInjectDeps) {
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
