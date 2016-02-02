import React from 'react';
import CreateComment from '../containers/create_comment';

import { IComments } from "../../../../common/collections";

interface IProps {
  comments?: IComments[];
  postId: string;
}

const CommentList = ({comments, postId}: IProps) => (
  <div className="comments">
    <div>
      <CreateComment postId={postId}/>
    </div>
    <div className="comment-list">
      {comments.length === 0 ? <p>No Comments Yet!</p> : null}
      {comments.map((comment: IComments) => (
        <div key={comment._id} className="comment">
          <b>{comment.author}:</b> {comment.text}
          {comment.saving ? '...' : null}
        </div>
      ))}
    </div>
  </div>
);

export default CommentList;
