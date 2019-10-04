import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import reduxThunk from 'redux-thunk'

import App from './views/app'
import Home from './views/home/home'
import Events from './views/events/events'
import Account from './views/account/account'
import Officers from './views/officers/officers'
import Signin from './views/auth/signin'
import Signup from './views/auth/signup'
import Signout from './views/auth/signout'
import RequireAuth from './views/auth/require_auth'
import reducers from './reducers'
import { AUTH_USER } from './constants/types'

import '../style/style.scss'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('auth_jwt_token')

// if we have a token, consider the user to be signed in
if (token) {
  store.dispatch({ type: AUTH_USER })
}
ReactDOM.render(
  <Provider store={store}>
    <HashRouter hashType="noslash">
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/officers" component={Officers} />
          <Route path="/account" component={RequireAuth(Account)} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/signout" component={Signout} />
        </Switch>
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
