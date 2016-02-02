import React from 'react';

interface IComponentProps {
  error: string;
  create: Function;
  postId: string;
}

class CreateComment extends React.Component<IComponentProps, {}> {
  render() {
    const {error} = this.props;
    return (
      <div>
        {error ? this.renderError(error) : null}
        <textarea ref='text' placeholder='Enter your comment here.'>

        </textarea>
        <br />
        <button onClick={this.create.bind(this)}>Add Comment</button>
      </div>
    );
  }

  private create() {
    const text = this.refs["text"]["value"];
    const {create, postId} = this.props;
    create(postId, text);
    this.refs["text"]["value"] = '';
  }

  private renderError(error: any) {
    return (
      <div className='error'>
        {error}
      </div>
    );
  }
}

export default CreateComment;
