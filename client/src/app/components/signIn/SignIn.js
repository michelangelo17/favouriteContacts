import React from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { postSignIn } from '../../../redux/thunks'
import {
  EmoForm,
  EmoField,
  H1,
  Button,
  FlexContainer,
  P,
} from '../../../emotionalThings/EmoTools'
import { Link } from 'react-router-dom'
import { PError } from './emoSignIn'
import { PulseLoader } from 'react-spinners'

const SignIn = () => {
  const dispatch = useDispatch()
  const { isLoading, postSignInError } = useSelector((state) => state)
  return (
    <>
      <H1 m='10px 0 0' ta='center'>
        Sign In
      </H1>
      <PError>{postSignInError}</PError>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(postSignIn(values))
          resetForm()
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required(`can't be empty`),
          password: Yup.string().required(`can't be empty`),
        })}
      >
        <EmoForm fdc='true' aic='true' m='20px'>
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
          <FlexContainer>
            <Link to='/register'>
              <Button
                m='20px'
                type='button'
                p='5px'
                br='5px'
                info
                disabled={isLoading}
              >
                Create an Account
              </Button>
            </Link>
            <Button
              m='20px'
              type='submit'
              p='5px'
              br='5px'
              success
              disabled={isLoading}
            >
              Submit
            </Button>
          </FlexContainer>
          <PulseLoader loading={isLoading} />
        </EmoForm>
      </Formik>
      <FlexContainer fdc aic m='20px'>
        <P>Account with seed data?</P>
        <P>Username and password both: blahblah</P>
        <P>
          Data persists, so please add examples to replace any deleted. Thank
          you!
        </P>
      </FlexContainer>
    </>
  )
}

export default SignIn
