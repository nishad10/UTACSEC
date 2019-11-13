import React, { useState, useEffect } from 'react'
import { Form, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addEvent } from '../actions/'
import axios from 'axios'

const EventForm = props => {
  const { addEvent, loading } = props
  const [profile, setProfile] = useState({})
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [time, setTime] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [active, setActive] = useState(false)
  const [ticketStatus, setTicketStatus] = useState(false)
  const [ticketID, setTicketID] = useState('')
  const [eventName, setEventname] = useState('')
  const [status, setStatus] = useState('')

  const tryConnect = () =>
    axios
      .get(`https://utacsecapi.herokuapp.com/auth-ping`)
      .then(r => setStatus(r.data))

  const getUserProfile = () =>
    axios.get(`https://utacsecapi.herokuapp.com/user/profile`).then(r => {
      setProfile(r.data)
    })

  useEffect(() => {
    tryConnect()
    getUserProfile()
  }, [])
  const handleSubmit = () => {
    addEvent({
      title,
      date,
      month,
      day,
      time,
      location,
      description,
      eventName,
      ticketID,
      active,
      ticketStatus,
      profile
    })
  }

  return (
    <div>
      <Dimmer active={loading}>
        <Loader active={loading}>Loading...</Loader>
      </Dimmer>
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
            label="Title"
            name="title"
            placeholder="CTF Demo Meeting"
            onChange={e => setTitle(e.target.value)}
          />
          <Form.Input
            label="Date"
            name="date"
            placeholder="10"
            onChange={e => setDate(e.target.value)}
          />
          <Form.Input
            required
            label="Month"
            name="month"
            placeholder="N O V"
            onChange={e => setMonth(e.target.value)}
          />
          <Form.Input
            label="Day"
            name="day"
            placeholder="Thurday"
            onChange={e => setDay(e.target.value)}
          />
          <Form.Input
            label="Time"
            name="time"
            placeholder="5-6pm"
            onChange={e => setTime(e.target.value)}
          />
          <Form.Input
            label="Location"
            name="location"
            placeholder="ERB 315"
            onChange={e => setLocation(e.target.value)}
          />
          <div style={{ gridColumnStart: '1' }}>
            <Form.Input
              label="EventBrite ID"
              name="eventBrite"
              placeholder="77972898037"
              onChange={e => setTicketID(e.target.value)}
            />
          </div>
          <Form.Input
            label="Event Name"
            name="eventName"
            placeholder="anything oneword example weekly/halloween"
            onChange={e => setEventname(e.target.value)}
          />

          <div style={{ gridColumnStart: '1' }}>
            <Form.TextArea
              label="Description"
              placeholder="Tell us about the event..."
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div style={{ gridColumnStart: '1', paddingTop: '20px' }}>
            <Form.Group>
              <label>Should Tickets be on sell?</label>
              <Form.Checkbox
                checked={ticketStatus}
                onClick={() => setTicketStatus(!ticketStatus)}
              />
            </Form.Group>
          </div>
          <div style={{ gridColumnStart: '1', paddingTop: '20px' }}>
            <Form.Group>
              <label>Should the event Appear live immediately?</label>
              <Form.Checkbox
                checked={active}
                onClick={() => setActive(!active)}
              />
            </Form.Group>
          </div>
        </div>
        <div style={{ gridColumnStart: '1', paddingTop: '1vw' }}>
          <Form.Button onClick={handleSubmit}>Submit</Form.Button>
        </div>
      </Form>
    </div>
  )
}
const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.general.loading
})
const mapDispatchToProps = dispatch => ({
  addEvent: val => dispatch(addEvent(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventForm)
