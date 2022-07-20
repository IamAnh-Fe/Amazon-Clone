import React from 'react'
import moment from "moment";
import purify from "dompurify";
import Rating from '~/components/Rating';
import RepComment from '../repComment';
const ListComment = ({ comment, socket }) => {
  console.log('review:', comment)
  return (
    <div className="listComment">
      <div className="listComment-card">
        <div className='listComment-content'>
          <h3>{comment.name}</h3>
          <Rating value={comment.star} />
          <div>
        <span>{moment(comment.createdAt).fromNow()}</span>
        <span className="listComment-date">{new Date(comment.createdAt).toLocaleString()}</span>
          </div>

        <p dangerouslySetInnerHTML={{ __html:purify.sanitize(comment.comment) }} />
        </div>
        <RepComment comment={comment} socket={socket}  />
      </div>
    </div>
  );
}

export default ListComment