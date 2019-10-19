import React, { Component } from 'react'
import { Button, Icon, Item, Segment } from 'semantic-ui-react'

export default class Events extends Component {
  componentDidMount() {
    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: '76782042155',
      modal: true,
      modalTriggerElementId: 'eventbrite-widget-modal-trigger-76782042155',
      onOrderComplete: console.log('Order Done')
    })
  }
  render() {
    return (
      <Item.Group divided relaxed style={{ display: 'grid', justifyContent: 'center', paddingTop: '50px' }}>
        <Segment inverted>
          <Item style={{ display: 'flex', paddingTop: '3vw' }}>
            <Item.Content
              style={{
                textAlign: 'center',
                fontSize: '3vw',
                paddingRight: '2vw',
                lineHeight: '4vw'
              }}
            >
              <div style={{ alignSelf: 'center' }}>
                <Item.Header>11</Item.Header>

                <Item.Description>October</Item.Description>
              </div>
            </Item.Content>
            <Item.Content style={{ maxWidth: '700px', fontSize: '2vw', lineHeight: '2.2vw' }}>
              <div style={{ paddingBottom: '10px' }}>
                This is a test meeting this is where meeting description shows up. The RSVP button for this meeting
                section should work the ones below this are same duplicates.
              </div>
              <Button
                style={{ fontSize: '1.5vw' }}
                id="eventbrite-widget-modal-trigger-76782042155"
                primary
                floated="right"
              >
                RSVP
                <Icon name="right chevron" />
              </Button>
            </Item.Content>
          </Item>
        </Segment>
        <Segment inverted>
          <Item style={{ display: 'flex', paddingTop: '3vw' }}>
            <Item.Content
              style={{
                textAlign: 'center',
                fontSize: '3vw',
                paddingRight: '2vw',
                lineHeight: '4vw'
              }}
            >
              <div style={{ alignSelf: 'center' }}>
                <Item.Header>11</Item.Header>

                <Item.Description>October</Item.Description>
              </div>
            </Item.Content>
            <Item.Content style={{ maxWidth: '700px', fontSize: '2vw', lineHeight: '2.2vw' }}>
              <div style={{ paddingBottom: '10px' }}>
                This is a test meeting this is where meeting description shows up. The RSVP button for this meeting
                section should work the ones below this are same duplicates.
              </div>
              <Button
                style={{ fontSize: '1.5vw' }}
                id="eventbrite-widget-modal-trigger-76782042155"
                primary
                floated="right"
              >
                RSVP
                <Icon name="right chevron" />
              </Button>
            </Item.Content>
          </Item>
        </Segment>

        <Segment inverted>
          <Item style={{ display: 'flex', paddingTop: '3vw' }}>
            <Item.Content
              style={{
                textAlign: 'center',
                fontSize: '3vw',
                paddingRight: '2vw',
                lineHeight: '4vw'
              }}
            >
              <div style={{ alignSelf: 'center' }}>
                <Item.Header>11</Item.Header>

                <Item.Description>October</Item.Description>
              </div>
            </Item.Content>
            <Item.Content style={{ maxWidth: '700px', fontSize: '2vw', lineHeight: '2.2vw' }}>
              <div style={{ paddingBottom: '10px' }}>
                This is a test meeting this is where meeting description shows up. The RSVP button for this meeting
                section should work the ones below this are same duplicates.
              </div>
              <Button
                style={{ fontSize: '1.5vw' }}
                id="eventbrite-widget-modal-trigger-76782042155"
                primary
                floated="right"
              >
                RSVP
                <Icon name="right chevron" />
              </Button>
            </Item.Content>
          </Item>
        </Segment>
      </Item.Group>
    )
  }
}
