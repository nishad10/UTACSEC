import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'
import { Menu, Icon, Sidebar, Responsive, Container, Segment, Visibility } from 'semantic-ui-react'
class DesktopContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'home', mobile: false, sidebarOpened: false }
    this.handleItemClick = this.handleItemClick.bind(this)
    // this.handleStack = this.handleStack.bind(this)
    this.getWidth = this.getWidth.bind(this)
    this.hideFixedMenu = this.hideFixedMenu.bind(this)
    this.showFixedMenu = this.showFixedMenu.bind(this)
  }
  handleItemClick(e, { name }) {
    this.setState({ activeItem: name })
  }
  renderSignButton(activeItem) {
    if (this.props.authenticated) {
      return (
        <Menu.Menu position="right" inverted icon="labeled">
          <Menu.Item as={Link} to="/signout" name="signout">
            <Icon name="sign-in" />
            SignOut
          </Menu.Item>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position="right" inverted icon="labeled">
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
  hideFixedMenu() {
    this.setState({ fixed: false })
  }
  showFixedMenu() {
    this.setState({ fixed: true })
  }
  getWidth() {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }
  render() {
    const { children } = this.props
    const { fixed, activeItem } = this.state
    return (
      <Responsive getWidth={this.getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign="center" style={{ minHeight: '1em', padding: '1em 0em' }} vertical>
            <Menu fixed={fixed ? 'top' : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size="large">
              <Container>
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
                  active={activeItem === 'about'}
                  onClick={this.handleItemClick}
                  as={Link}
                  to="/about"
                  name="about"
                />
                <Menu.Item
                  active={activeItem === 'account'}
                  onClick={this.handleItemClick}
                  as={Link}
                  to="/account"
                  name="account"
                />
                {this.renderSignButton(activeItem)}
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}
const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

export default connect(
  mapStateToProps,
  actions
)(DesktopContainer)
