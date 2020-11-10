import React, { useEffect, useState } from 'react';
import { Header, Divider, Dimmer, Loader } from 'semantic-ui-react';
import Eventitem from '../../components/eventItem';
import OldEventItem from '../../components/oldEventItem';
import { getEvents } from '../../actions';
import { connect } from 'react-redux';

const events = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  const { events, getEvents, loading } = props;
  const currEvents = events.filter((event) => !event.past);
  const pastEvents = events.filter((event) => event.past);

  useEffect(() => {
    getEvents();

    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowSizeChange);
  }, []);

  const mobile = width < 600;
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
            fontSize: mobile ? '4vw' : '1.5vw',
          }}
        >
          RSVP Now
        </Header>
      </Divider>

      {currEvents.length === 0 ? (
        <Header
          textAlign="center"
          inverted
          content="There are no events right now. Check back later!"
        />
      ) : (
        currEvents.map((item) => (
          <Eventitem
            ticketID={item.ticketID}
            key={item._id}
            date={item.date}
            month={item.month}
            day={item.day}
            time={item.time}
            location={item.location}
            title={item.title}
            description={item.description}
            sponsor={false}
            eventName={item.eventName} //this is eventbrite(182012,-> name <-)
            ticketStatus={item.ticketStatus}
            mobile={mobile}
            custom={item.custom}
            url={item.url}
          />
        ))
      )}
      <Divider horizontal inverted style={{ margin: '5vw 0vw ' }}>
        <Header
          as="h4"
          style={{
            color: 'rgb(158, 158, 158)',
            fontSize: mobile ? '4vw' : '1.5vw',
          }}
        >
          Past Events
        </Header>
      </Divider>
      {pastEvents.length === 0 ? (
        <Header
          textAlign="center"
          inverted
          content="Could not find past events."
        />
      ) : (
        pastEvents.map((item) => (
          <OldEventItem
            key={item._id}
            date={item.date}
            month={item.month}
            day={item.day}
            time={item.time}
            location={item.location}
            title={item.title}
            description={item.description}
            mobile={mobile}
          />
        ))
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  events: state.general.events,
  loading: state.general.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => dispatch(getEvents()),
});
export default connect(mapStateToProps, mapDispatchToProps)(events);
