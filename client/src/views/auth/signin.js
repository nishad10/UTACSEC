import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { signUserIn } from '../../actions'
import { Button, Segment, Header, Grid, Form, Dimmer, Loader } from 'semantic-ui-react'
import history from '../../history'
import { AUTH_ERROR } from '../../constants/types'

const Signin = props => {
  const { signUserIn, error, loading } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    history.push('/signup')
  }
  const cleanError = () => {
    return function(dispatch) {
      dispatch({ type: AUTH_ERROR, payload: false })
    }
  }
  const handleSubmit = () => {
    signUserIn({ email: email, password: password })
  }

  useEffect(() => {
    cleanError()
  }, [error])

  return (
    <div>
      <Dimmer active={loading}>
        <Loader active={loading}>Signing You In!</Loader>
      </Dimmer>
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" style={{ color: 'white', fontSize: '2em' }} textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large" style={{ marginBottom: '1em' }}>
            <Segment stacked>
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

              <Button onClick={handleSubmit} style={{ background: '#21ba45' }} fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>

          <Button
            onClick={handleRegister}
            fluid
            size="large"
            basic
            inverted
            color="green"
            style={{ fontSize: '1.14em', paddingTop: '1em' }}
          >
            Not registered yet?
          </Button>
        </Grid.Column>
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.general.loading
})
const mapDispatchToProps = dispatch => ({
  signUserIn: val => dispatch(signUserIn(val))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin)
