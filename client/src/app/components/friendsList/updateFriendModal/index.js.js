import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import {
  EmoField,
  Button,
  EmoForm,
  H2,
  FlexContainer,
} from '../../../../emotionalThings/EmoTools'
import { EmoUFModalDiv } from './EmoUpdateFriend'
import { setIsLoading, putUpdateFriend } from '../../../../redux/slices'

const UpdateFriendModal = ({ visible, close, id }) => {
  const idNum = Number(id.update)
  const dispatch = useDispatch()
  const { friends } = useSelector(state => state)
  const friend = friends.find(friend => friend.id === idNum)
  return (
    visible &&
    ReactDOM.createPortal(
      <>
        <EmoUFModalDiv>
          <H2 m='20px' ta='center'>
            Update
          </H2>
          <Formik
            initialValues={{
              ...friend,
            }}
            onSubmit={(values, { resetForm }) => {
              dispatch(setIsLoading(true))
              dispatch(putUpdateFriend(idNum, values)).then()
              resetForm()
              close('update', false)
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required(`can't be empty`),
              age: Yup.number()
                .min(0)
                .max(120)
                .required(`can't be empty`),
              email: Yup.string()
                .email()
                .required(`can't be empty`),
            })}
          >
            <EmoForm white='true' fdc='true' aic='true'>
              <ErrorMessage name='name' component='p' />
              <EmoField m='20px' type='string' name='name' placeholder='name' />
              <ErrorMessage name='age' component='p' />
              <EmoField m='20px' type='number' name='age' placeholder='age' />
              <ErrorMessage name='email' component='p' />
              <EmoField
                m='20px'
                type='email'
                name='email'
                placeholder='email'
              />
              <FlexContainer white>
                <Button
                  m='10px'
                  p='5px'
                  br='5px'
                  type='button'
                  onClick={() => close('update', false)}
                >
                  Cancel
                </Button>
                <Button m='10px' p='5px' br='5px' success type='submit'>
                  Submit
                </Button>
              </FlexContainer>
            </EmoForm>
          </Formik>
        </EmoUFModalDiv>
      </>,
      document.body
    )
  )
}

export default UpdateFriendModal
