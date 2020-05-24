import React from 'react'
import ReactDOM from 'react-dom'
import { EmoLink, Button } from '../../../../emotionalThings/EmoTools'
import { EmoModalDiv } from './EmoBackModal'

const BackModal = ({ visible, close }) =>
  visible &&
  ReactDOM.createPortal(
    <>
      <EmoModalDiv>
        <EmoLink to='/home'>
          <Button
            success
            m='15px'
            h='40px'
            br='15px'
            p='0 10px'
            onClick={() => close('addNewFriend', false)}
          >
            Go Home
          </Button>
        </EmoLink>
        <Button
          m='15px'
          h='40px'
          br='15px'
          p='0 10px'
          info
          onClick={() => close('addNewFriend', false)}
        >
          Add Another Friend
        </Button>
      </EmoModalDiv>
    </>,
    document.body
  )

export default BackModal
