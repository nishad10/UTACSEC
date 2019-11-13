import React, { useState } from 'react'
import { Form, Header, Dimmer, Loader, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateUserProfile } from '../../actions/index'

const Account = props => {
  const { updateUserProfile, loading } = props
  const [firstName, setFirstname] = useState(false)
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState({})

  const handleSubmit = () => {
    updateUserProfile({ firstName, lastName, email, password })
  }

  return (
    <div>
      <Dimmer active={loading}>
        <Loader active={loading}>Loading...</Loader>
      </Dimmer>
      <Container text style={{ paddingTop: '3vw' }}>
        <Header inverted content="Update Information except your password.">
          <Form inverted>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '40% 40%',
                columnGap: '3vw'
              }}
            >
              <Form.Input
                required
                label="First Name"
                name="fname"
                placeholder={'Change Name'}
                onChange={e => setFirstname(e.target.value)}
              />
              <Form.Input
                label="Last Name"
                name="lname"
                placeholder={'Change Name'}
                onChange={e => setLastname(e.target.value)}
              />
              <Form.Input
                required
                label="Email"
                name="email"
                placeholder={'Change Email'}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Input
                label="Password"
                name="password"
                placeholder="Enter Password to verify changes"
                onChange={e => setPassword(e.target.value)}
              />
              <div style={{ gridColumnStart: '1', paddingTop: '1vw' }}>
                <Form.Button onClick={handleSubmit}>Submit</Form.Button>
              </div>
            </div>
          </Form>
        </Header>
        <Header
          inverted
          content="If you want to change your password or you have any questions related to your account send us an email."
        />
      </Container>
    </div>
  )
}
const mapStateToProps = state => ({
  user: state.user.profile,
  loading: state.user.loading
})
const mapDispatchToProps = dispatch => ({
  updateUserProfile: val => dispatch(updateUserProfile(val))
})
export default connect(mapStateToProps, mapDispatchToProps)(Account)
