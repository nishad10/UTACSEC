import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signUserUp } from '../../actions'

import {
  Grid,
  Button,
  Dimmer,
  Loader,
  Header,
  Form,
  Segment
} from 'semantic-ui-react'

const Signup = props => {
  const { loading, signUserUp } = props
  const [fname, setfName] = useState('')
  const [lname, setlName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = () => {
    signUserUp({
      firstName: fname,
      lastName: lname,
      email: email,
      password: password
    })
  }
  return (
    <div>
      <Dimmer active={loading}>
        <Loader active={loading}>Signing You Up!</Loader>
      </Dimmer>
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header
            as="h2"
            style={{ color: 'white', fontSize: '2em' }}
            textAlign="center"
          >
            Log-in to your account
          </Header>
          <Form size="large" style={{ marginBottom: '1em' }}>
            <Segment stacked>
              <Form.Input
                onChange={e => setfName(e.target.value)}
                fluid
                icon="user"
                iconPosition="left"
                placeholder="First Name"
              />
              <Form.Input
                onChange={e => setlName(e.target.value)}
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Last Name"
              />
              <Form.Input
                onChange={e => setEmail(e.target.value)}
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                onChange={e => setPassword(e.target.value)}
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button
                onClick={handleSubmit}
                style={{ background: '#21ba45' }}
                fluid
                size="large"
              >
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
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
