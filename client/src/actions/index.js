import axios from 'axios'
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../constants/types'
const ROOT_URL = process.env.API_URI || 'http://localhost:8000'

axios.defaults.baseURL = ROOT_URL
if (localStorage.getItem('auth_jwt_token')) {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token')
}
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export function signUserIn(data) {
  return function(dispatch) {
    // Submit email/password to server
    axios
      .post(`/signin`, data)
      .then(res => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('auth_jwt_token', res.data.token)
        window.location = '/#account'
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token')
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: AUTH_ERROR, payload: 'Server Error, try later.' })
      })
  }
}

export function signUserUp(userObj) {
  return function(dispatch) {
    // Submit email/password to server
    axios
      .post(`/signup`, userObj)
      .then(res => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('auth_jwt_token', res.data.token)
        window.location = '/#account'
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token')
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: AUTH_ERROR, payload: 'Server Error, try later.' })
      })
  }
}

export function signUserOut() {
  return function(dispatch) {
    dispatch({ type: UNAUTH_USER })
    localStorage.removeItem('auth_jwt_token')
  }
}

export function upTwitter() {
  return function(dispatch) {
    fetch(
      'https://cors-anywhere.herokuapp.com/https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=UTA_CSEC'
    )
      .then(res => res.json())
      .then(
        result => dispatch({ type: 'GET_TWITTER', payload: result }),
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log(error)
        }
      )
  }
}

const request = axios
export { request }
