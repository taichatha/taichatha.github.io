import React from 'react';
import './Post.css';

function Post(props) {
  return (
    <div className="post">
      <div className='post_title'>{props.post.title}</div>	
      <div className='post_date'>{props.post.date}</div>
      <div className='post_body'>{props.post.body}</div>
    </div>
  );
}

export default Post;


