import React from 'react';
//Formik is a library for creating forms
import { Formik, Form, Field, ErrorMessage } from 'formik';
//Yup is a library for form validation
import * as Yup from 'yup';

function CreatePost() {

  //an object
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  }

  //This is an object containing all the fields in the form that we need to validate
  //We'll specify using Yup what exactly needs validation in those fields
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a title"),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  //onSubmit Formik automatically parses the data as an argument to this function
  //another object
  const onSubmit = (data) => {
      console.log(data);
  };

  return (
    <div className='createPostPage'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='formContainer'>
          <label>Title: </label>
          {/* Error message for the title field. Put it in a span element*/}
          < ErrorMessage name="title" component="span" />
          <Field 
            autoComplete = "off"
            id="inputCreatePost" 
            name="title" 
            placeholder="Enter a title..." 
          />

          <label>Post: </label>
          < ErrorMessage name="postText" component="span" />          
          <Field 
            autoComplete = "off"
            id="inputCreatePost" 
            name="postText" 
            placeholder="Enter the copy..." 
          />

          <label>Username: </label>
          < ErrorMessage name="username" component="span" />          
          <Field 
            autoComplete = "off"
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