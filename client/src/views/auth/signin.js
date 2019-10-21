import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { signUserIn } from '../../actions'
import { Button, Segment, Header, Grid, Form, Message } from 'semantic-ui-react'
import history from '../../history'
import { AUTH_ERROR } from '../../constants/types'

const Signin = props => {
  const { signUserIn, error } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleChange = (e, { name, value }) => {
    if (name === 'email') setEmail(value)
    else if (name === 'password') setPassword(value)
  }
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
    <Grid centered columns={2}>
      <Grid.Column style={{ fontSize: '1vw', paddingTop: '10vw' }}>
        <Header inverted as="h2" textAlign="center" style={{ fontSize: '5vw' }}>
          Login
        </Header>
        <Segment>
          <Form error={error} size="large" onSubmit={handleSubmit} style={{ fontSize: '1vw' }}>
            <Form.Input
              fluid
              icon="user"
              name="email"
              iconPosition="left"
              placeholder="Email address"
              value={email}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              name="password"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={handleChange}
            />
            <Button color="green" fluid size="large" style={{ fontSize: '1.2vw' }}>
              Login
            </Button>
            <Message
              error
              header="Incorrect Login Details"
              content="Only officers have accounts for now signup for new accounts will be available soon."
            />
          </Form>
        </Segment>

        <Button onClick={handleRegister} fluid size="large" basic inverted color="green" style={{ fontSize: '1.5vw' }}>
          Not registered yet?
        </Button>
      </Grid.Column>
    </Grid>
  )
}

const mapStateToProps = state => ({
  error: state.auth.error
})
const mapDispatchToProps = dispatch => ({
  signUserIn: val => dispatch(signUserIn(val))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin)
