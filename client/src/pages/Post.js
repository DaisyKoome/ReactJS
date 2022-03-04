import React, { useEffect, useState } from 'react';
//useParams hook enables usage of parameters eg id to get a specific blog post page
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {
   
      let { id } = useParams();
      const [postObject, setPostObject] = useState({});
      
      useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
          });
      });

    return (
      <div className='postPage'>
        <div className='leftSide'>
          <div className='title'>{postObject.title}</div>
          <div className='body'>{postObject.postText}</div>
          <div className='footer'>{postObject.username}</div>
          </div>  
      </div>
    );
  
}

export default Post;