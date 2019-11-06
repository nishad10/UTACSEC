import React, { useEffect, useState } from 'react'
import { Header, Divider, Dimmer, Loader } from 'semantic-ui-react'
import Eventitem from '../../components/eventItem'
import { getEvents } from '../../actions'
import { connect } from 'react-redux'

const events = props => {
  const [width, setWidth] = useState(window.innerWidth)

  const { events, getEvents, loading } = props
  console.log(loading)

  useEffect(() => {
    getEvents()

    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowSizeChange)
  }, [])

  const mobile = width < 600
  console.log(loading)
  return (
    <div style={{ padding: mobile ? '5vw 10vw' : '5vw 15vw' }}>
      <Dimmer active={loading}>
        <Loader active={loading}>Getting Events...</Loader>
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
        <Eventitem
          ticketID={item.ticketID}
          key={item._id}
          date={item.date}
          month={item.month}
          time={item.time}
          location={item.location}
          title={item.title}
          description={item.description}
          sponsor={false}
          eventName={item.eventName} //this is eventbrite(182012,-> name <-)
          ticketStatus={item.ticketStatus}
          mobile={mobile}
        />
      ))}
    </div>
  )
}
const mapStateToProps = state => ({
  events: state.general.events,
  loading: state.general.loading
})

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(events)
