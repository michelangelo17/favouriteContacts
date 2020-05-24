import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    baseURL: '/api',
    headers: {
      Authorization: token,
    },
  })
}
