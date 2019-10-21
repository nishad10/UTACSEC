import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signUserUp } from '../../actions'
import CenterCard363 from '../../components/centerCard363'
import useForm from '../../use-form-react'
import { Message, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Signup = props => {
  /*const { signUserUp } = props
  const [errMsg, setErrorMsg] = useState('')
  const options = {
    initialValues: {
      firstName: 'uta',
      lastName: 'csec',
      email: 'xyz@mail.com',
      password: 'secret',
      password2: 'secret'
    },
    callback: () => {
      if (inputs.password == inputs.password2) {
        signUserUp(inputs)
      } else {
        setErrorMsg('password does not matched')
      }
    },
    debug: false
  }
  const { onSubmit, onChange, inputs, dirty, submitting } = useForm('AdvanceForm', options)*/
  return (
    <div>
      <Message negative style={{ fontSize: '2.5vw' }}>
        <Message.Header>Not Available Under Progress</Message.Header>
        <p>To become a part of the club please click the join now button.</p>
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
    /*
    <CenterCard363>
      <div className="card">
        <h4 className="card-header">Sign Up</h4>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>First name:</label>
              <input
                name="firstName"
                value={inputs.firstName}
                type="text"
                onChange={onChange}
                className="form-control form-control-lg"
                placeholder="First Name"
                required
              />
            </div>
            <div className="form-group">
              <label>Last name:</label>
              <input
                name="lastName"
                value={inputs.lastName}
                type="text"
                onChange={onChange}
                className="form-control form-control-lg"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                name="email"
                value={inputs.email}
                type="email"
                onChange={onChange}
                className="form-control form-control-lg"
                placeholder="sample@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={inputs.password}
                onChange={onChange}
                className="form-control form-control-lg"
                placeholder="your password"
                required
              />
            </div>

            <div className="form-group">
              <label>Comfirm Password:</label>
              <input
                type="password"
                name="password2"
                value={inputs.password2}
                onChange={onChange}
                className="form-control form-control-lg"
                placeholder="your password again"
                required
              />
            </div>
            {errMsg && (
              <div className="alert alert-warning">
                <strong>Oops!</strong> {errMsg}
              </div>
            )}
            <div style={{ paddingTop: '30px' }}>
              <button type="submit" className="btn btn-lg btn-light btn-block" disabled={!dirty || submitting}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </CenterCard363>*/
  )
}
const mapDispatchToProps = dispatch => ({
  signUserUp: val => dispatch(signUserUp(val))
})
export default connect(
  null,
  mapDispatchToProps
)(Signup)
