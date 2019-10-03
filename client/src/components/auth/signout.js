import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUserOut } from '../../actions'

class Signout extends Component {
  componentDidMount() {
    this.props.signUserOut()
  }
  render() {
    return (
      <div>
        <h1>Hope to see you soon!</h1>
      </div>
    )
  }
}
const mapDispatchToProps = { signUserOut }

export default connect(
  null,
  mapDispatchToProps
)(Signout)
