import React from 'react'
import {
  EmoLink,
  FlexContainer,
  Small,
} from '../../../emotionalThings/EmoTools'

const SignOut = () => {
  return (
    <EmoLink to='/'>
      <FlexContainer
        brandColor
        p='15px'
        position='absolute'
        top='0'
        left='0'
        onClick={() => localStorage.removeItem('token')}
      >
        <Small wfc ta='center'>
          Sign Out
        </Small>
      </FlexContainer>
    </EmoLink>
  )
}

export default SignOut
