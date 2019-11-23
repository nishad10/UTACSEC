import axios from 'axios'
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../constants/types'
import history from '../history'
const ROOT_URL = process.env.API_URI || 'http://localhost:8000'
axios.defaults.baseURL = 'https://utacsecapi.herokuapp.com'

if (localStorage.getItem('auth_jwt_token')) {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem(
    'auth_jwt_token'
  )
}
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

export function signUserIn(data) {
  // const { history } = this.props

  return function(dispatch) {
    dispatch({ type: 'LOADING', payload: true })
    // Submit email/password to server
    axios
      .post(`/signin`, data)
      .then(res => {
        dispatch({ type: 'LOADING', payload: true })
        dispatch({ type: AUTH_USER })
        localStorage.setItem('auth_jwt_token', res.data.token)
        axios.defaults.headers.common['Authorization'] = localStorage.getItem(
          'auth_jwt_token'
        )
        history.push('/')
        window.location.reload(true)
        dispatch({ type: 'LOADING', payload: false })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: AUTH_ERROR, payload: true })
        dispatch({ type: 'LOADING', payload: false })
      })
  }
}

export function getEvents() {
  // const { history } = this.props
  return function(dispatch) {
    dispatch({ type: 'LOADING', payload: true })
    // Submit email/password to server
    axios
      .get(`/events`)
      .then(res => {
        dispatch({ type: 'GET_EVENTS', payload: res.data })
        dispatch({ type: 'LOADING', payload: false })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
      })
  }
}

export function getEventsAdmin() {
  // const { history } = this.props
  return function(dispatch) {
    dispatch({ type: 'LOADING', payload: true })
    // Submit email/password to server
    axios
      .get(`/eventsAdmin`)
      .then(res => {
        dispatch({ type: 'GET_EVENTS_ADMIN', payload: res.data })
        dispatch({ type: 'LOADING', payload: false })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
      })
  }
}
export function deleteEvent(data) {
  // const { history } = this.props
  return function(dispatch) {
    dispatch({ type: 'LOADING', payload: true })
    // Submit email/password to server
    axios
      .post(`/eventsDelete`, data)
      .then(res => {
        dispatch({ type: 'LOADING', payload: false })
        history.push('/events')
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
      })
  }
}

export function addEvent(data) {
  // const { history } = this.props
  return function(dispatch) {
    dispatch({ type: 'LOADING', payload: true })
    axios
      .post(`/eventsadd`, data)
      .then(res => {
        dispatch({ type: 'LOADING', payload: false })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
      })
  }
}

export function editEvent(data) {
  return function(dispatch) {
    dispatch({ type: 'LOADING', payload: true })
    axios
      .post(`/eventedit`, data)
      .then(res => {
        dispatch({ type: 'LOADING', payload: false })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
      })
  }
}
export function signUserUp(userObj) {
  return function(dispatch) {
    dispatch({ type: 'LOADING', payload: true })
    // Submit email/password to server
    axios
      .post(`/signup`, userObj)
      .then(res => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('auth_jwt_token', res.data.token)
        history.push('/account')
        axios.defaults.headers.common['Authorization'] = localStorage.getItem(
          'auth_jwt_token'
        )
        dispatch({ type: 'LOADING', payload: false })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: AUTH_ERROR, payload: true })
        dispatch({ type: 'LOADING', payload: false })
      })
  }
}

export function signUserOut() {
  return function(dispatch) {
    dispatch({ type: UNAUTH_USER })
    localStorage.removeItem('auth_jwt_token')
  }
}

export function updateUserProfile(inputs) {
  axios.post(`/user/profile`, inputs)
}
export function upTwitter() {
  return function(dispatch) {
    dispatch({ type: 'LOADING', payload: true })
    fetch(
      'https://cors-anywhere.herokuapp.com/https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=UTA_CSEC'
    )
      .then(res => res.json())
      .then(
        result => {
          dispatch({ type: 'GET_TWITTER', payload: result })
          dispatch({ type: 'LOADING', payload: false })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log(error)
          dispatch({ type: 'LOADING', payload: false })
          dispatch({ type: 'LOADING', payload: false })
        }
      )
  }
}
export function getProfile() {
  axios
    .get(`https://utacsecapi.herokuapp.com/user/profile`)
    .then(r => {
      return r.data
    })
    .catch(error => {
      console.log(error)
    })
}
export function whatBrowser() {
  // Firefox 1.0+
  //const isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]"
  //const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

  // Internet Explorer 6-11
  //const isIE = /*@cc_on!@*/false || !!document.documentMode;

  // Edge 20+
  //const isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1 - 71
  const isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
  if (isChrome) return true
  return false
}

const request = axios
export { request }
