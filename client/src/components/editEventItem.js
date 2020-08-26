import React, { useState, useEffect } from 'react';
import { Form, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { editEvent } from '../actions/';
import axios from 'axios';

const EditEventItem = (props) => {
  const { event, loading } = props;
  const [profile, setProfile] = useState({});
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [active, setActive] = useState(false);
  const [ticketStatus, setTicketStatus] = useState(false);
  const [ticketID, setTicketID] = useState('');
  const [eventName, setEventname] = useState('');
  const [url, setURL] = useState('');
  const [custom, setCustom] = useState(false);

  const getUserProfile = () =>
    axios.get(`https://utacsecapi.herokuapp.com/user/profile`).then((r) => {
      setProfile(r.data);
    });

  useEffect(() => {
    getUserProfile();
    setTitle(event.title);
    setDate(event.date);
    setMonth(event.month);
    setDate(event.date);
    setDay(event.day);
    setTime(event.time);
    setLocation(event.location);
    setDescription(event.description);
    setActive(event.active);
    setTicketStatus(event.ticketStatus);
    setTicketID(event.ticketID);
    setEventname(event.eventName);
    setURL(event.url);
    setCustom(event.custom);
  }, []);
  const handleSubmit = () => {
    editEvent({
      id: event._id,
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
      profile,
      url,
      custom,
    });
  };

  return (
    <div>
      <Form inverted>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '40% 40%',
            columnGap: '3vw',
          }}
        >
          <Form.Input
            required
            label="Title"
            name="title"
            placeholder="CTF Demo Meeting"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Input
            label="Date"
            name="date"
            placeholder="10"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Form.Input
            required
            label="Month"
            name="month"
            placeholder="N O V"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
          <Form.Input
            label="Day"
            name="day"
            placeholder="Thurday"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
          <Form.Input
            label="Time"
            name="time"
            placeholder="5-6pm"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Form.Input
            label="Location"
            name="location"
            placeholder="ERB 315"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div
            style={{
              gridColumnStart: '1',
              gridColumnEnd: '3',
              paddingTop: '20px',
            }}
          >
            {' '}
            <Form.Group>
              <label>Is this a custom event with non eventbrite link?</label>
              <Form.Checkbox
                checked={custom}
                onClick={() => setCustom(!custom)}
              />
            </Form.Group>
          </div>
          {!custom ? (
            <div style={{ gridColumnStart: '1' }}>
              <Form.Input
                label="EventBrite ID"
                name="eventBrite"
                value={ticketID}
                placeholder="77972898037"
                onChange={(e) => setTicketID(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <Form.Input
                label="Button Redirect URL"
                name="buttonurl"
                value={url}
                placeholder="www.externallink.com"
                onChange={(e) => setURL(e.target.value)}
              />
            </div>
          )}
          <div style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>
            <Form.TextArea
              label="Description"
              placeholder="Tell us about the event..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {!custom ? (
            <div
              style={{
                gridColumnStart: '1',
                gridColumnEnd: '3',
                paddingTop: '20px',
              }}
            >
              {' '}
              <Form.Group>
                <label>Should Tickets be on sell?</label>
                <Form.Checkbox
                  checked={ticketStatus}
                  onClick={() => setTicketStatus(!ticketStatus)}
                />
              </Form.Group>
            </div>
          ) : null}
          <div
            style={{
              gridColumnStart: '1',
              gridColumnEnd: '3',
              paddingTop: '20px',
            }}
          >
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
          <Form.Button onClick={handleSubmit}>Save Changes</Form.Button>
        </div>
      </Form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  error: state.auth.error,
});
const mapDispatchToProps = (dispatch) => ({
  editEvent: (val) => dispatch(editEvent(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEventItem);
