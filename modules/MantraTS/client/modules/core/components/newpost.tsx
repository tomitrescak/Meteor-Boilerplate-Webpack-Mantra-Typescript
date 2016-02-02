import React from 'react';

interface INewPostProps {
  error: string;
  create: (title: string, content: string) => void;
}

class NewPost extends React.Component<INewPostProps, {}> {
  render() {
    const {error} = this.props;
    return (
      <div className="new-post">
        <h2>Add New Post</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <input ref="titleRef" type="Text" placeholder="Enter your post title." /> <br/>
        <textarea ref="contentRef" placeholder="Enter your post content." /> <br/>
        <button onClick={this.createPost.bind(this)}>Add New</button>
      </div>
    );
  }

  createPost() {
    const {create} = this.props;
    const {titleRef, contentRef} = this.refs;

    create(titleRef["value"], contentRef["value"]);
  }
}

export default NewPost;
