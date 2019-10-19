import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'home' }
    this.handleItemClick = this.handleItemClick.bind(this)
  }
  handleItemClick(e, { name }) {
    this.setState({ activeItem: name })
  }
  renderSignButton(activeItem) {
    if (this.props.authenticated) {
      return (
        <Menu.Menu position="right" inverted icon="labeled" style={{ fontSize: '1.5vw' }}>
          <Menu.Item as={Link} to="/signout" name="signout">
            <Icon name="sign-in" />
            SignOut
          </Menu.Item>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position="right" inverted icon="labeled" style={{ fontSize: '1.5vw' }}>
          <Menu.Item
            active={activeItem === 'signin'}
            onClick={this.handleItemClick}
            as={Link}
            to="/signin"
            name="signin"
          >
            <Icon name="sign-in" />
            SignIn
          </Menu.Item>
          <Menu.Item
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}
            as={Link}
            to="/signup"
            name="signup"
          >
            <Icon name="signup" />
            SignUp
          </Menu.Item>
        </Menu.Menu>
      )
    }
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu pointing secondary inverted stackable style={{ fontSize: '1.5vw' }}>
        <Menu.Item active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to="/" name="home" />
        <Menu.Item
          active={activeItem === 'events'}
          onClick={this.handleItemClick}
          as={Link}
          to="/events"
          name="events"
        />
        <Menu.Item
          active={activeItem === 'officers'}
          onClick={this.handleItemClick}
          as={Link}
          to="/officers"
          name="officers"
        />
        <Menu.Item
          active={activeItem === 'account'}
          onClick={this.handleItemClick}
          as={Link}
          to="/account"
          name="account"
        />
        {this.renderSignButton(activeItem)}
      </Menu>
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
