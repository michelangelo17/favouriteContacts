import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFriendsList } from '../../../redux/slices'
import {
  FlexContainer,
  H2,
  P,
  H1,
  EmoLink,
  Small,
  Button,
} from '../../../emotionalThings/EmoTools'
import useModal from '../../../utils/customHooks/useModal'
import UpdateFriendModal from './updateFriendModal/index.js.js'
import DeleteFriendModal from './deleteFriendModal'
import SignOut from '../signOut'

const FriendsList = () => {
  const dispatch = useDispatch()
  const { friends } = useSelector(state => state)
  const { visible, showHideModal, value } = useModal()
  useEffect(() => {
    dispatch(getFriendsList())
  }, [dispatch])
  return (
    <>
      <UpdateFriendModal
        visible={visible.update}
        close={showHideModal}
        id={value}
      />
      <DeleteFriendModal
        visible={visible.delete}
        close={showHideModal}
        id={value}
      />
      <H1 m='20px' ta='center'>
        Friends
      </H1>
      <SignOut />
      <EmoLink to='/add-new-friend'>
        <FlexContainer
          m='10px 0 0 0'
          secondaryColor
          p='15px'
          position='absolute'
          right='0'
        >
          <Small wfc ta='center'>
            Add New Friend
          </Small>
        </FlexContainer>
      </EmoLink>
      <FlexContainer m='100px 0 0 0' fw>
        {friends.map(friend => (
          <FlexContainer
            fdc
            aic
            m='10px auto'
            p='20px'
            minw='400px'
            white
            bs
            key={friend.id}
          >
            <H2>{friend.name}</H2>
            <P m='15px'>{friend.age} years old</P>
            <P>{friend.email}</P>
            <FlexContainer white>
              <Button
                m='15px'
                h='40px'
                br='15px'
                p='0 10px'
                warning
                value={friend.id}
                onClick={e => showHideModal('delete', true, e)}
              >
                Delete
              </Button>
              <Button
                m='15px'
                h='40px'
                br='15px'
                p='0 10px'
                info
                value={friend.id}
                onClick={e => showHideModal('update', true, e)}
              >
                Update
              </Button>
            </FlexContainer>
          </FlexContainer>
        ))}
      </FlexContainer>
    </>
  )
}

export default FriendsList
