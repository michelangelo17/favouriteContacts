import {
  setSignedIn,
  setIsLoading,
  setPostSignInError,
  setPostRegisterError,
  setFriends,
  setGetFriendsListError,
} from '../slices'
import { axiosWithAuth } from '../../utils/axiosWithAuth/index'

export const checkToken = () => (dispatch) =>
  localStorage.getItem('token')
    ? dispatch(setSignedIn(true))
    : dispatch(setSignedIn(false))

export const postSignIn = (values) => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    const { data } = await axiosWithAuth().post('login', values)
    localStorage.setItem('token', data.token)
    dispatch(checkToken())
    dispatch(setIsLoading(false))
    dispatch(setPostSignInError(null))
  } catch (err) {
    dispatch(setPostSignInError(err.response.data.message))
    dispatch(checkToken())
    dispatch(setIsLoading(false))
  }
}

export const postRegister = (values) => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    const { data } = await axiosWithAuth().post('register', values)
    localStorage.setItem('token', data.token)
    dispatch(checkToken())
    dispatch(setIsLoading(false))
    dispatch(setPostSignInError(null))
    dispatch(setPostRegisterError(null))
  } catch (err) {
    dispatch(setPostRegisterError(err.response.data.error))
    dispatch(setPostSignInError(null))
    dispatch(checkToken())
    dispatch(setIsLoading(false))
  }
}

export const getFriendsList = () => (dispatch) =>
  axiosWithAuth()
    .get('friends')
    .then((res) => {
      dispatch(setFriends(res.data))
      dispatch(setGetFriendsListError(null))
    })
    .catch((err) => dispatch(setGetFriendsListError(err.message)))

export const postNewFriend = (values) => (dispatch) => {
  dispatch(setIsLoading(true))
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
}

export const putUpdateFriend = (id, values) => (dispatch) => {
  dispatch(setIsLoading(true))
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
}

export const deleteFriend = (id) => (dispatch) => {
  dispatch(setIsLoading(true))
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
}
