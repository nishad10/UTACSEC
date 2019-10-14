import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'
class Header extends Component {
  renderSignButton() {
    if (this.props.authenticated) {
      return (
        <Menu size="tiny" icon="labeled">
          <Menu.Item as={Link} to="/signout" name="signout">
            <Icon name="sign-out" />
            SignOut
          </Menu.Item>
        </Menu>
      )
    } else {
      return (
        <Menu.Menu position="right" inverted icon="labeled">
          <Menu.Item as={Link} to="/signin" name="signin">
            <Icon name="sign-in" />
            SignIn
          </Menu.Item>
          <Menu.Item as={Link} to="/signup" name="signup">
            <Icon name="signup" />
            SignUp
          </Menu.Item>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div display="flex">
        <Menu inverted>
          <Menu.Item as={Link} to="/" name="home" />
          <Menu.Item as={Link} to="/events" name="events" />
          <Menu.Item as={Link} to="/officers" name="officers" />
          <Menu.Item as={Link} to="/account" name="account" />
          {this.renderSignButton()}
        </Menu>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

export default connect(
  mapStateToProps,
  actions
)(Header)
