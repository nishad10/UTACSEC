import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route } from 'react-router-dom'
import Poll from './views/poll'
import reduxThunk from 'redux-thunk'

import App from './views/app'
import Home from './views/home/home'
import Events from './views/events/events'
import Account from './views/account/account'
import Officers from './views/officers/officers'
import Signin from './views/auth/signin'
import Signup from './views/auth/signup'
import Signout from './views/auth/signout'
import Join from './views/Join/Join.js'
import Admin from './views/admin/admin'
import RequireAuth from './views/auth/require_auth'
import reducers from './reducers'
import { AUTH_USER } from './constants/types'
import '../style/style.scss'
import history from './history.js'
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('auth_jwt_token')

// if we have a token, consider the user to be signed in
if (token) {
  store.dispatch({ type: AUTH_USER })
}
ReactDOM.render(
  <Provider store={store}>
       <Router history={history}>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/joinnow" component={Join} />
        <Route path="/events" component={Events} />
        <Route path="/officers" component={Officers} />
        <Route path="/account" component={RequireAuth(Account)} />
        <Route path="/admin" component={Admin} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/signout" component={Signout} />
        <Route path="/flag" component={Poll} />
      </App>
      </Router>
  </Provider>,
  document.getElementById('root')
)
