import React, { Component } from 'react';
//useParams hook enables usage of parameters eg id to get a specific blog post page
import { useParams } from 'react-router-dom';

function Post() {
   
      let { id } = useParams()
    return (
      <div>{ id }</div>
    )
  
}

export default Post