import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function CreatePost() {
  return (
    <div className='createPostPage'>
      <Formik>
        <Form>
          <Field id="inputCreatePost" name="title" placeholder="(Title)" />
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost