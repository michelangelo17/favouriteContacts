import { createSlice } from '@reduxjs/toolkit'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const rootSlice = createSlice({
  name: 'rootReducer',
  initialState: {
    signedIn: false,
    isLoading: false,
    friends: [],
    postSignInError: null,
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
  setGetFriendsListError,
  setFriendToEdit,
} = rootSlice.actions

export default rootSlice.reducer

// thunks

export const checkToken = () => (dispatch) =>
  localStorage.getItem('token')
    ? dispatch(setSignedIn(true))
    : dispatch(setSignedIn(false))

export const postSignIn = (values) => (dispatch) =>
  axiosWithAuth()
    .post('login', values)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      dispatch(checkToken())
      dispatch(setIsLoading(false))
      dispatch(setPostSignInError(null))
    })
    .catch((err) => {
      dispatch(setPostSignInError(err.message))
      dispatch(checkToken())
      dispatch(setIsLoading(false))
    })

export const getFriendsList = () => (dispatch) =>
  axiosWithAuth()
    .get('friends')
    .then((res) => {
      dispatch(setFriends(res.data))
      dispatch(setGetFriendsListError(null))
    })
    .catch((err) => dispatch(setGetFriendsListError(err.message)))

export const postNewFriend = (values) => (dispatch) =>
  axiosWithAuth()
    .post('friends', values)
    .then((res) => {
      dispatch(setIsLoading(false))
      dispatch(setFriends(res.data))
    })
    .catch((err) => {
      dispatch(setIsLoading(false))
      console.log(err)
    })

export const putUpdateFriend = (id, values) => (dispatch) =>
  axiosWithAuth()
    .put(`friends/${id}`, values)
    .then((res) => {
      dispatch(setIsLoading(false))
      dispatch(setFriends(res.data))
    })
    .catch((err) => {
      dispatch(setIsLoading(false))
      console.log(err)
    })

export const deleteFriend = (id) => (dispatch) =>
  axiosWithAuth()
    .delete(`friends/${id}`)
    .then((res) => {
      dispatch(setIsLoading(false))
      dispatch(setFriends(res.data))
    })
    .catch((err) => {
      dispatch(setIsLoading(false))
      console.log(err)
    })
