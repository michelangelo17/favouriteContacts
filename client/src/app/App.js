import React from 'react'
import SignIn from './components/signIn/SignIn'
import { PrivateRoute, SignInRoute } from '../utils/authRoutes'
import FriendsList from './components/friendsList/FriendsList'
import NewFriend from './components/newFriend/NewFriend'
import EmoGlobal from '../emotionalThings/EmoGlobal'

const App = () => {
  return (
    <>
      <EmoGlobal />
      <SignInRoute exact path='/' component={SignIn} />
      <PrivateRoute path='/home' component={FriendsList} />
      <PrivateRoute path='/add-new-friend' component={NewFriend} />
    </>
  )
}
export default App
