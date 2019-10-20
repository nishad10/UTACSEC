import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signUserIn } from '../../actions'
import { Button, Segment, Header, Grid, Form } from 'semantic-ui-react'
import history from '../../history'
const Signin = props => {
  const { signUserIn } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleChange = (e, { name, value }) => {
    if (name === 'email') setEmail(value)
    else if (name === 'password') setPassword(value)
  }
  const handleRegister = () => {
    history.push('/#signup')
  }
  const handleSubmit = () => {
    signUserIn({ email: email, password: password })
  }
  return (
    <Grid centered columns={2}>
      <Grid.Column style={{ fontSize: '1vw', paddingTop: '10vw' }}>
        <Header inverted as="h2" textAlign="center" style={{ fontSize: '5vw' }}>
          Login
        </Header>
        <Segment>
          <Form size="large" onSubmit={handleSubmit} style={{ fontSize: '1vw' }}>
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
          </Form>
        </Segment>

        <Button onClick={handleRegister} fluid size="large" basic inverted color="green" style={{ fontSize: '1.5vw' }}>
          Not registered yet?
        </Button>
      </Grid.Column>
    </Grid>
  )
}

const mapDispatchToProps = dispatch => ({
  signUserIn: val => dispatch(signUserIn(val))
})

export default connect(
  null,
  mapDispatchToProps
)(Signin)
