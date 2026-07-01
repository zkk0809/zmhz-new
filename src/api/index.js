import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

// Request interceptor
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

// Response interceptor - save new token
api.interceptors.response.use(
  (response) => {
    if (response.data && response.data.newtoken) {
      localStorage.setItem('token', response.data.newtoken)
    }
    if (response.data && response.data.Authorization) {
      localStorage.setItem('token', response.data.Authorization)
    }
    return response
  },
  (error) => Promise.reject(error)
)

export default api
