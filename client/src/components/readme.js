import React, { Component } from 'react';
import { Accordion, Header, Segment, Icon } from 'semantic-ui-react';

export default class ReadMe extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  render() {
    const { activeIndex } = this.state;
    const handleClick = (e, titleProps) => {
      const { index } = titleProps;

      const newIndex = activeIndex === index ? -1 : index;

      this.setState({ activeIndex: newIndex });
    };

    return (
      <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
        <div>
          <Segment inverted style={{ width: '100%' }}>
            <Header
              as="h3"
              style={{ fontSize: '25px', color: 'rgb(91, 192, 190)' }}
              inverted
              textAlign="center"
            >
              Events Add
            </Header>
            <Segment inverted>
              <Accordion inverted>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={handleClick}
                  style={{ fontSize: '18px' }}
                >
                  <Icon name="dropdown" />
                  Title
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>
                    Appears on the very top, weekly meetings are usually in the
                    format [Weekly Meeting - Topic] where Topic is the topic of
                    discussion in that meeting. For Example: Weekly Meeting
                    Penetration Testing
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={handleClick}
                  style={{ fontSize: '18px' }}
                >
                  <Icon name="dropdown" />
                  Date
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <p>Single or Double digit number. For example: 19</p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={handleClick}
                  style={{ fontSize: '18px' }}
                >
                  <Icon name="dropdown" />
                  Month
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <p>
                    Three letter short form of a month where each letter is
                    seperated by a space. For example: N O V
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 3}
                  index={3}
                  onClick={handleClick}
                  style={{ fontSize: '18px' }}
                >
                  <Icon name="dropdown" />
                  Day
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                  <p>
                    Just the normal day of the week. Can be left empty if you
                    want. For example: Sunday
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 4}
                  index={4}
                  onClick={handleClick}
                  style={{ fontSize: '18px' }}
                >
                  <Icon name="dropdown" />
                  Time
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 4}>
                  <p>
                    The time of the meeting/event along with am or pm. For
                    example: 4-5pm
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 5}
                  index={5}
                  onClick={handleClick}
                  style={{ fontSize: '18px' }}
                >
                  <Icon name="dropdown" />
                  Location
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 5}>
                  <p>
                    Location of the meeting/event. Keep it as short as possible.
                    For example: ERB 228
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 6}
                  index={6}
                  onClick={handleClick}
                  style={{ fontSize: '18px' }}
                >
                  <Icon name="dropdown" />
                  Custom Event Checkbox
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 6}>
                  <p>
                    We willl wither have events that require rsvp through
                    eventbrite, or custom events where we ask people to visit an
                    external link for rsvp or more info. For example microsoft
                    teams or google meet. In this case tick this checkbox and
                    provide a external url to redirect people to.
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 6}
                  index={6}
                  onClick={handleClick}
                  style={{ fontSize: '18px' }}
                >
                  <Icon name="dropdown" />
                  External URL
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 6}>
                  <p>
                    If you checked the checkbox above then you want to setup a
                    event with custom external url rather than eventbrite. In
                    that case enter your custom url here. IMPORTANT: Make sure
                    the url starts with https:// and then www.something.com. So
                    www.something.com is invalid and you should rather do
                    https://www.something.com
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 7}
                  index={6}
                  onClick={handleClick}
                  style={{ fontSize: '18px' }}
                >
                  <Icon name="dropdown" />
                  EventBrite ID
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 7}>
                  <p>
                    This is the id you get after you create an eventbrite event
                    from the website. If you dont enter this the rsvp button
                    wont let you rsvp. WE NEED THIS! If this event is being
                    managed using a google form or something other than
                    eventbrite DO NOT CREATE IT HERE. Ask Nishad to create it.
                    For example: 77972898037
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 8}
                  index={7}
                  onClick={handleClick}
                  style={{ fontSize: '18px' }}
                >
                  <Icon name="dropdown" />
                  EventName
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 8}>
                  <p>
                    THIS DOES NOT APPEAR ON WEBSITE. BUT YOU NEED THIS TO MAKE
                    THE CODE WORK. This is used internatlly by the code. Do not
                    have two events with the same evnetname. Put something
                    unique here but no numbers only letters. You can put
                    something like weeklyMeeting or halloweenEvent but make sure
                    there isnt already one with that name. Better to have random
                    strings. For example: awjdnawube
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 9}
                  index={8}
                  onClick={handleClick}
                  style={{ fontSize: '18px' }}
                >
                  <Icon name="dropdown" />
                  Description
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 9}>
                  <p>
                    This is the main description or body of the event. Explain
                    who is the speaker for the event, give some info on what we
                    will be covering, if there will be food, stuff like that,
                    try to have atleast 3-4 lines in here.
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 10}
                  index={9}
                  onClick={handleClick}
                  style={{ fontSize: '18px' }}
                >
                  <Icon name="dropdown" />
                  Should Tickets be on sell? / Active
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 10}>
                  <p>
                    If you tick this checkbox that means when you submit the
                    event, people can click on rsvp button to register for
                    event. If you just want to create the event to let people
                    know but arent sure about the event so dont want to sell
                    tickets just yet you can do that here. For example: Checked
                    means people can buy tickets
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 11}
                  index={10}
                  onClick={handleClick}
                  style={{ fontSize: '18px' }}
                >
                  <Icon name="dropdown" />
                  Should the event Appear live immediately? / Active
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 11}>
                  <p>
                    If you want to create an event before hand but not show it
                    on website just yet you can do that here. Then when you want
                    to you can come back and change tick this checkmark in edit
                    section to show it on website. Or if there is a problem with
                    event you can take it off the website using this option. For
                    example: Checked means event is visible on website
                  </p>
                </Accordion.Content>
              </Accordion>
            </Segment>
          </Segment>
        </div>

        <div style={{ height: '100%' }}>
          <Segment inverted style={{ width: '100%', height: '100%' }}>
            <Header
              as="h3"
              style={{ fontSize: '25px', color: 'rgb(91, 192, 190)' }}
              inverted
              textAlign="center"
            >
              Events Edit
            </Header>
            <Segment inverted>
              <Accordion inverted>
                <Accordion.Title
                  active={activeIndex === 11}
                  index={11}
                  onClick={handleClick}
                  style={{ fontSize: '18px' }}
                >
                  <Icon name="dropdown" />
                  How to edit event
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 11}>
                  <p>
                    ALL ACTIONS ARE IMMEDIATE! So you dont get confirmation. You
                    can delete an event using delete button. This will
                    permanently remove the event. If you want to remove it
                    temporrarily you can uncheck the active field of the event.
                    You can edit almost all parts of the event after clicking
                    Edit. Click save changes to make sure you edit it. If you
                    click the close button it wont save your changes.
                  </p>
                </Accordion.Content>
              </Accordion>
            </Segment>
          </Segment>
        </div>
      </div>
    );
  }
}
