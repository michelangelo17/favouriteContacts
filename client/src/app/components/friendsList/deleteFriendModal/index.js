import React from 'react'
import ReactDOM from 'react-dom'
import { Button, P } from '../../../../emotionalThings/EmoTools'
import { EmoModalDiv } from './EmoDeleteFriend'
import { useDispatch } from 'react-redux'
import { deleteFriend } from '../../../../redux/thunks'

const DeleteFriendModal = ({ visible, close, id }) => {
  const idNum = id.delete
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteFriend(idNum))
    close('delete', false)
  }
  return (
    visible &&
    ReactDOM.createPortal(
      <>
        <EmoModalDiv>
          <P>Are you sure you want to delete this friend?</P>
          <Button
            onClick={handleDelete}
            danger
            m='15px'
            h='40px'
            br='15px'
            p='0 10px'
          >
            Confirm
          </Button>
          <Button
            m='15px'
            h='40px'
            br='15px'
            p='0 10px'
            onClick={(e) => close('delete', false)}
          >
            Cancel
          </Button>
        </EmoModalDiv>
      </>,
      document.body
    )
  )
}
export default DeleteFriendModal
