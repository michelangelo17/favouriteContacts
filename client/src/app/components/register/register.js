import React from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { postRegister } from '../../../redux/thunks'
import {
  EmoForm,
  EmoField,
  H1,
  Button,
  FlexContainer,
} from '../../../emotionalThings/EmoTools'
import { Link } from 'react-router-dom'
import { PError } from '../signIn/emoSignIn'
import { PulseLoader } from 'react-spinners'

const Register = () => {
  const dispatch = useDispatch()
  const { isLoading, postRegisterError } = useSelector((state) => state)
  return (
    <>
      <H1 m='10px 0 0' ta='center'>
        Register
      </H1>
      <PError>
        {postRegisterError && postRegisterError.includes('duplicate key')
          ? 'Username unavailble, please select another!'
          : postRegisterError}
      </PError>
      <Formik
        initialValues={{
          username: '',
          password: '',
          password2: '',
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            postRegister({
              username: values.username,
              password: values.password,
            })
          )
          resetForm()
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required(`can't be empty`),
          password: Yup.string().required(`can't be empty`),
          password2: Yup.string()
            .required(`can't be empty`)
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
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
          <ErrorMessage name='password2' component='p' />
          <EmoField
            m='20px'
            type='password'
            name='password2'
            placeholder='confirm password'
          />
          <FlexContainer>
            <Link to='/'>
              <Button
                m='20px'
                type='button'
                p='5px'
                br='5px'
                info
                disabled={isLoading}
              >
                Go to Sign In
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
    </>
  )
}

export default Register
