import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: 'rootReducer',
  initialState: {
    signedIn: false,
    isLoading: false,
    friends: [],
    postSignInError: null,
    postRegisterError: null,
    getFriendsListError: null,
    friendToEdit: null,
  },
  reducers: {
    setSignedIn(state, action) {
      state.signedIn = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
    setFriends(state, action) {
      state.friends = action.payload
    },
    setPostSignInError(state, action) {
      state.postSignInError = action.payload
    },
    setPostRegisterError(state, action) {
      state.postRegisterError = action.payload
    },
    setGetFriendsListError(state, action) {
      state.getFriendsListError = action.payload
    },
    setFriendToEdit(state, action) {
      state.friendToEdit = action.payload
    },
  },
})

export const {
  setSignedIn,
  setIsLoading,
  setFriends,
  setPostSignInError,
  setPostRegisterError,
  setGetFriendsListError,
  setFriendToEdit,
} = rootSlice.actions

export default rootSlice.reducer
