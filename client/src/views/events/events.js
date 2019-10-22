import React, { Component } from 'react'
import { Button, Icon, Item, Segment, Header, Modal, Image } from 'semantic-ui-react'

export default class Events extends Component {
  componentDidMount() {
    // Weekly meeting Event the modaltriggerelementid is what you should pass while calling which button goes to which event.
    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: '77972898037',
      modal: true,
      modalTriggerElementId: 'weekly',
      onOrderComplete: console.log('Order Done')
    })
    // Halloween Event the modaltriggerelementid is what you should pass while calling which button goes to which event.
    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: '78026151319',
      modal: true,
      modalTriggerElementId: 'halloween',
      onOrderComplete: console.log('Order Done')
    })
  }

  render() {
    const renderConfirmNotConfirm = (confirm, trigger) => {
      return confirm ? (
        <Button style={{ fontSize: '1.5vw', float: 'right' }} color="green" id={trigger}>
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
                lineHeight: '4vw',
                paddingRight: '3vw'
              }}
            >
              <div style={{ alignSelf: 'center', paddingTop: '3vw', paddingBottom: '3vw', width: '17vw' }}>
                <Item.Header style={{ fontSize: '4vw' }}>24th</Item.Header>
                <Item.Description style={{ fontSize: '2vw' }}>O C T</Item.Description>
                <Item.Description style={{ color: '#3cba45', fontSize: '2vw', lineHeight: '3vw' }}>
                  <div>Thursday</div>
                  <div>5pm-6pm</div>
                  <div>ERB 228</div>
                </Item.Description>
              </div>
            </Item.Content>

            <Item.Content style={{ maxWidth: '700px', fontSize: '2vw', lineHeight: '3vw', paddingTop: '3vw' }}>
              <div style={{ paddingBottom: '10px', marginBottom: '1vw' }}>
                The meeting will focus on use of metasploit and its syntax. Learn to use metasploit a penetration
                testing framework to discover exploits, and validate vulnerabilities. - By Zehra Jafri.{' '}
              </div>
              <div style={{ textDecoration: 'underline', marginBottom: '1.5vw' }}>
                [ This weeks meeting will be held at ERB 228 not ERB 316! ]
              </div>
              {renderConfirmNotConfirm(true, 'weekly')}
            </Item.Content>
          </Item>
        </Segment>

        <Segment inverted>
          <Item style={{ display: 'flex' }}>
            <Item.Content
              style={{
                textAlign: 'center',
                fontSize: '3vw',
                paddingRight: '3vw',
                lineHeight: '4vw'
              }}
            >
              <div style={{ alignSelf: 'center', paddingTop: '3vw', paddingBottom: '3vw', width: '17vw' }}>
                <Item.Header style={{ fontSize: '4vw' }}>31st</Item.Header>
                <Item.Description style={{ fontSize: '2vw' }}>O C T</Item.Description>
                <Item.Description style={{ color: '#3cba45', fontSize: '2vw', lineHeight: '3vw' }}>
                  <div>Thursday</div>
                  <div>7pm-10pm</div>
                  <div style={{ fontWeight: 'bold', color: 'white' }}>Sponsored By :-</div>
                  <Image
                    as="a"
                    href="https://www.privateinternetaccess.com/"
                    target="_blank"
                    fluid
                    src="/statics/pia-logo-white.png"
                  />
                </Item.Description>
              </div>
            </Item.Content>
            <Item.Content style={{ maxWidth: '700px', fontSize: '2vw', lineHeight: '3vw', paddingTop: '3vw' }}>
              <div style={{ paddingBottom: '10px', marginBottom: '1vw' }}>
                The College of Engineering Halloween Bash will be hosted by the UTA CSEC Club along with a few other COE
                clubs. This event will serve as an opportunity to meet new people in COE, discover new organizations to
                be a part of, and a cool way to spend Halloween. There will be food, games, activities, prizes, and a
                costume contest so be sure to wear your best costume and get ready to have fun!
              </div>
              {renderConfirmNotConfirm(true, 'halloween')}
            </Item.Content>
          </Item>
        </Segment>
      </Item.Group>
    )
  }
}
