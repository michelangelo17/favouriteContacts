import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    baseURL: 'http://localhost:8888/api',
    headers: {
      Authorization: token,
    },
  })
}
