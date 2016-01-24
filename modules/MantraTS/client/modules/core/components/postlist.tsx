import React from 'react';

import { IPosts } from "../../../../collections/collections";

const PostList = ({posts}) => (
  <div>
    <ul>
      { posts.map((post: IPosts) => (
        <li key={post._id}>
          <a href={`/mantra/post/${post._id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
