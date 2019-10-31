import React, { useState } from 'react'
import {Form, Header} from 'semantic-ui-react'
import { connect } from 'react-redux'
import {updateUserProfile} from '../../actions/index'

//const ROOT_URL = process.env.API_URI
//axios.defaults.baseURL = ROOT_URL


const Account = (props) => {
  const { updateUserProfile } = props
  const [firstName, setFirstname] = useState(false)
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState({})

  const handleSubmit = () => {
    updateUserProfile({firstName,lastName,email,password})
  }
 
    return (
      <Header inverted content="Update your Information here">
      <Form inverted >
        <div style={{display:'grid',gridTemplateColumns:'40% 40%',columnGap:'3vw'}}>
          <Form.Input
          required

            label="First Name"
            name="fname"
            placeholder={'Hacker'}
            onChange={(e)=>(setFirstname(e.target.value))}
          />
           <Form.Input
            label="Last Name"
            name="lname"
            placeholder={'Man'}
            onChange={(e)=>(setLastname(e.target.value))}
          />
          <Form.Input
          required
            label="Email"
            name="email"
            placeholder={'root@toor'}
            onChange={(e)=>(setEmail(e.target.value))}
          />
          <Form.Input
            label="Password"
            name="password"
            placeholder="adminadmin"
            onChange={(e)=>(setPassword(e.target.value))}
          />
        <div style={{gridColumnStart:'1', paddingTop:'1vw'}}>
        <Form.Button onClick={handleSubmit}>Submit</Form.Button>
        </div>
        </div>
        </Form>
        </Header>
   
  )
}
const mapStateToProps = state => ({
  user: state.user.profile
})
const mapDispatchToProps = dispatch => ({
  updateUserProfile: (val) => dispatch(updateUserProfile(val))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)

