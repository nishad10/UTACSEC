import React, { useEffect, useState } from 'react'
import {
  Header,
  Divider,
  Dimmer,
  Loader,
  Button,
  Icon,
  Modal
} from 'semantic-ui-react'
import { getEventsAdmin, deleteEvent } from '../actions'
import { connect } from 'react-redux'
import axios from 'axios'
import EditEventItem from './editEventItem'
const EventEdit = props => {
  const [width, setWidth] = useState(window.innerWidth)
  const [profile, setProfile] = useState({})

  const { events, getEventsAdmin, loading, deleteEvent } = props

  const handleDelete = id => {
    deleteEvent({ id, profile })
  }
  const getUserProfile = () =>
    axios.get(`https://utacsecapi.herokuapp.com/user/profile`).then(r => {
      setProfile(r.data)
    })

  useEffect(() => {
    getUserProfile()
    getEventsAdmin()

    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowSizeChange)
  }, [])
  const mobile = width < 600
  return (
    <div style={{ padding: mobile ? '0' : '5vw 10vw' }}>
      <Dimmer active={loading}>
        <Loader active={loading}>Loading...</Loader>
      </Dimmer>
      <Divider horizontal inverted style={{ margin: '5vw 0vw ' }}>
        <Header
          as="h4"
          style={{
            color: 'rgb(158, 158, 158)',
            fontSize: mobile ? '4vw' : '1.5vw'
          }}
        >
          RSVP Now
        </Header>
      </Divider>

      {events.map(item => (
        // eslint-disable-next-line react/jsx-key
        <div style={{}}>
          <Divider inverted style={{ margin: '3vw 10vw' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '80% 20%' }}>
            <div>
              <div
                style={{
                  color: '#DE6E4B',
                  fontSize: '25px',
                  fontWeight: 'bold',
                  paddingBottom: '10px',
                  display: 'flex'
                }}
              >
                <div style={{ color: '#5BC0BE' }}>Title :-</div>
                {item.title}
              </div>
              <div
                style={{
                  color: '#DE6E4B',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  paddingBottom: '10px'
                }}
              >
                <div style={{ color: '#5BC0BE' }}>Description :-</div>
                {item.description}
              </div>
              <div
                style={{
                  color: '#DE6E4B',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  paddingBottom: '10px',
                  display: 'flex'
                }}
              >
                <div style={{ color: '#5BC0BE' }}>Database ID :-</div>
                {item._id}
              </div>
              <div
                style={{
                  color: '#DE6E4B',
                  fontSize: '18px',
                  paddingBottom: '10px',
                  display: 'flex'
                }}
              >
                <div style={{ color: '#5BC0BE' }}>TicketStatus :-</div>
                {item.ticketStatus ? 'RSVP is enabled' : 'RSVP is disabled'}
              </div>
              <div
                style={{
                  color: '#DE6E4B',
                  fontSize: '18px',
                  paddingBottom: '10px',
                  display: 'flex'
                }}
              >
                <div style={{ color: '#5BC0BE' }}>Active :-</div>
                {item.active
                  ? 'Event is being shown on website'
                  : 'Event is in database but not being shown on website'}
              </div>
            </div>

            <div>
              <Button
                value={item._id}
                onClick={e => handleDelete(e.target.value)}
                style={{
                  fontSize: mobile ? '10px' : '1em',
                  marginBottom: '20px',
                  float: 'right',
                  background: '#DE6E4B',
                  display: 'flex'
                }}
              >
                Delete
                <Icon name="right chevron" />
              </Button>
              <Modal
                basic
                centered
                size="tiny"
                trigger={
                  <Button
                    style={{
                      fontSize: mobile ? '10px' : '1em',
                      float: 'right',
                      background: '#DE6E4B',
                      display: 'flex'
                    }}
                  >
                    Edit
                    <Icon name="right chevron" />
                  </Button>
                }
                closeIcon
              >
                <Header icon="edit" content="Edit Event" />
                <Modal.Content>
                  <EditEventItem event={item} />
                </Modal.Content>
              </Modal>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
const mapStateToProps = state => ({
  events: state.general.eventsAdmin,
  loading: state.general.loading
})

const mapDispatchToProps = dispatch => ({
  getEventsAdmin: () => dispatch(getEventsAdmin()),
  deleteEvent: val => dispatch(deleteEvent(val))
})
export default connect(mapStateToProps, mapDispatchToProps)(EventEdit)
