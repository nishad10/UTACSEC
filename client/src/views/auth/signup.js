import React from 'react'
import { connect } from 'react-redux'
import { signUserUp } from '../../actions'

import { Message, Button, Icon, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Signup = props => {
  const { loading } = props
  return (
    <div>
      <Dimmer active={loading}>
        <Loader active={loading}>Signing You Up!</Loader>
      </Dimmer>
      <Message negative style={{ fontSize: '2.5vw' }}>
        <Message.Header>Not Available Under Progress</Message.Header>
        <p>
          To become a part of the club please click the join now button. You will soon be able to make an account on the
          website. Only officers have accounts right now.
        </p>
      </Message>
      <Link to="/joinnow">
        <Button animated color="green" style={{ fontSize: '2.5vw' }}>
          <Button.Content visible>Join Now</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Link>
    </div>
  )
}
const mapStateToProps = state => ({
  loading: state.general.loading
})

const mapDispatchToProps = dispatch => ({
  signUserUp: val => dispatch(signUserUp(val))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
