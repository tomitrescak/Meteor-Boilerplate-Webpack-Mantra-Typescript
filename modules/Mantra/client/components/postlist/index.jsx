import React from 'react';

class PostList extends React.Component {
  render() {
    const {posts} = this.props;
    return (
      <div>
        <ul>
          {posts.map(post => (
            <li key={post._id}>
              <a href={FlowRouter.path("posts.single", {postId: post._id})}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
