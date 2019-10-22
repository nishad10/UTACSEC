import React, { Component } from 'react'
import { Button, Icon, Item, Segment, Header, Modal } from 'semantic-ui-react'

export default class Events extends Component {
  componentDidMount() {
    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: '77972898037',
      modal: true,
      modalTriggerElementId: 'eventbrite-widget-modal-trigger-77972898037',
      onOrderComplete: console.log('Order Done')
    })
  }

  render() {
    const renderConfirmNotConfirm = confirm => {
      return confirm ? (
        <Button
          style={{ fontSize: '1.5vw', float: 'right' }}
          color="green"
          id="eventbrite-widget-modal-trigger-77972898037"
        >
          RSVP
          <Icon name="right chevron" />
        </Button>
      ) : (
        <Modal
          basic
          centered
          size="tiny"
          trigger={
            <Button style={{ fontSize: '1.5vw', float: 'right' }} color="green">
              RSVP
              <Icon name="right chevron" />
            </Button>
          }
          closeIcon
        >
          <Header icon="ticket" content="Event Unavailable" />
          <Modal.Content>
            <p>The event hasnt been confirmed yet or the tickets are not available. Check back soon!!</p>
          </Modal.Content>
        </Modal>
      )
    }

    return (
      <Item.Group divided relaxed style={{ display: 'grid', justifyContent: 'center', paddingTop: '50px' }}>
        <Segment inverted>
          <Item style={{ display: 'flex' }}>
            <Item.Content
              style={{
                textAlign: 'center',
                fontSize: '3vw',
                paddingRight: '2vw',
                lineHeight: '4vw'
              }}
            >
              <div style={{ alignSelf: 'center', paddingTop: '3vw', paddingBottom: '3vw', width: '20vw' }}>
                <Item.Header style={{ fontSize: '4vw' }}>24th</Item.Header>
                <Item.Description>October</Item.Description>
                <Item.Description style={{ color: '#3cba45', fontSize: '2vw' }}>
                  <div>
                    Thursday<br></br>5pm-6pm
                  </div>
                </Item.Description>
              </div>
            </Item.Content>

            <Item.Content style={{ maxWidth: '700px', fontSize: '2vw', lineHeight: '3vw', paddingTop: '3vw' }}>
              <div style={{ paddingBottom: '10px' }}>
                The meeting will focus on use of metasploit and its syntax. Learn to use metasploit to discover
                exploits, and validate vulnerabilities. By Zehra.
                <p style={{ textDecoration: 'underline' }}>
                  [ This weeks meeting will be held at ERB 228 not ERB 316! ]
                </p>
              </div>
              {renderConfirmNotConfirm(true)}
            </Item.Content>
          </Item>
        </Segment>
        <Segment inverted>
          <Item style={{ display: 'flex' }}>
            <Item.Content
              style={{
                textAlign: 'center',
                fontSize: '3vw',
                paddingRight: '2vw',
                lineHeight: '4vw'
              }}
            >
              <div style={{ alignSelf: 'center', paddingTop: '3vw', paddingBottom: '3vw', width: '20vw' }}>
                <Item.Header style={{ fontSize: '4vw' }}>31st</Item.Header>
                <Item.Description>October</Item.Description>
                <Item.Description style={{ color: '#3cba45', fontSize: '2vw' }}>
                  <div>
                    Friday<br></br>7pm-9pm
                  </div>
                </Item.Description>
              </div>
            </Item.Content>
            <Item.Content style={{ maxWidth: '700px', fontSize: '2vw', lineHeight: '3vw', paddingTop: '3vw' }}>
              <div style={{ paddingBottom: '10px' }}>
                The College of Engineering Halloween Party will be hosted by the UTA CSEC Club along with the help of a
                few other COE clubs. You will be able to RSVP to the event and get your tickets soon on here. We will
                send out an email when the tickets are available. Everything will be free.
              </div>
              {renderConfirmNotConfirm(false)}
            </Item.Content>
          </Item>
        </Segment>
      </Item.Group>
    )
  }
}
