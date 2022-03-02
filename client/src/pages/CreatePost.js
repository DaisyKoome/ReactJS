import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function CreatePost() {

  const initialValues = {
    title: "",
    postText: "",
    username: "",
  }

  //onSubmit Formik automatically parses the data as an argument to this function
  const onSubmit = (data) => {
      console.log(data);
  };

  return (
    <div className='createPostPage'>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className='formContainer'>
          <label>Title: </label>
          <Field 
            autocomplete = "off"
            id="inputCreatePost" 
            name="title" 
            placeholder="Enter a title..." 
          />

          <label>Post: </label>
          <Field 
            autocomplete = "off"
            id="inputCreatePost" 
            name="postText" 
            placeholder="Enter the copy..." 
          />

          <label>Username: </label>
          <Field 
            autocomplete = "off"
            id="inputCreatePost" 
            name="username" 
            placeholder="Enter your username..." 
          />
          <button type="submit"> Create Post </button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost