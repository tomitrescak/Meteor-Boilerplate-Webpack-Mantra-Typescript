import React from 'react';

import { IPosts } from "../../../../common/collections";

const PostList = ({posts}) => (
  <div className='postlist'>
    <ul>
      {posts.map((post: IPosts) => (
        <li key={post._id}>
          <a href={`/post/${post._id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
