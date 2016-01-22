import React from 'react';

const Navigations = () => (
  <div>
    <b> Navigations: </b>
    <a href={FlowRouter.path("posts.list")}>Home</a> |
    <a href={FlowRouter.path("newpost")}>New Post</a>
  </div>
);

export default Navigations;
