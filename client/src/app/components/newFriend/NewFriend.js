import React, { useEffect } from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { postNewFriend, checkToken } from '../../../redux/thunks'
import {
  EmoField,
  H1,
  Button,
  EmoForm,
  EmoLink,
  FlexContainer,
  Small,
} from '../../../emotionalThings/EmoTools'
import useModal from '../../../utils/customHooks/useModal'
import BackModal from './backModal'
import SignOut from '../signOut'

const NewFriend = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state)
  const { showHideModal, visible } = useModal()
  useEffect(() => {
    dispatch(checkToken())
  }, [dispatch])
  return (
    <>
      <BackModal visible={visible.addNewFriend} close={showHideModal} />
      <H1 m='20px' ta='center' mobm='70px 20px 20px'>
        Add A Friend
      </H1>
      <SignOut />
      <EmoLink to='/home'>
        <FlexContainer
          m='10px 0 0 0'
          secondaryColor
          p='15px'
          position='absolute'
          left='0'
        >
          <Small wfc ta='center'>
            Home
          </Small>
        </FlexContainer>
      </EmoLink>
      <Formik
        initialValues={{
          name: '',
          age: '',
          email: '',
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(postNewFriend(values))
          showHideModal('addNewFriend', true)
          resetForm()
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required(`can't be empty`),
          age: Yup.number().min(0).max(120).required(`can't be empty`),
          email: Yup.string().email().required(`can't be empty`),
        })}
      >
        <EmoForm m='100px 0 20px 0' w='100vw' h='100vh' fdc='true' aic='true'>
          <ErrorMessage name='name' component='p' />
          <EmoField m='20px' type='string' name='name' placeholder='name' />
          <ErrorMessage name='age' component='p' />
          <EmoField m='20px' type='number' name='age' placeholder='age' />
          <ErrorMessage name='email' component='p' />
          <EmoField m='20px' type='email' name='email' placeholder='email' />
          <Button p='5px' br='5px' success type='submit' disabled={isLoading}>
            Submit
          </Button>
        </EmoForm>
      </Formik>
    </>
  )
}

export default NewFriend
