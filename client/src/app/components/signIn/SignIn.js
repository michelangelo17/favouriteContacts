import React from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { setIsLoading, postSignIn } from '../../../redux/slices'
import {
  EmoForm,
  EmoField,
  H1,
  Button,
} from '../../../emotionalThings/EmoTools'

const SignIn = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state)
  return (
    <>
      <H1 ta='center'>Sign In</H1>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(setIsLoading(true))
          dispatch(postSignIn(values))
          resetForm()
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required(`can't be empty`),
          password: Yup.string().required(`can't be empty`),
        })}
      >
        <EmoForm fdc aic m='20px'>
          <ErrorMessage name='username' component='p' />
          <EmoField
            m='20px'
            type='username'
            name='username'
            placeholder='enter username'
          />
          <ErrorMessage name='password' component='p' />
          <EmoField
            m='20px'
            type='password'
            name='password'
            placeholder='enter password'
          />
          <Button m='20px' type='submit' p='5px' br='5px' success disabled={isLoading}>
            Submit
          </Button>
        </EmoForm>
      </Formik>
    </>
  )
}

export default SignIn
