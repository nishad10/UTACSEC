import React, { Component } from 'react'
import { Button, Icon, Item, Segment } from 'semantic-ui-react'

export default class Events extends Component {
  /*

<script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

<script type="text/javascript">
    var exampleCallback = function() {
        console.log('Order complete!')
    }

    window.EBWidgets.createWidget({
        // Required
        widgetType: 'checkout',
        eventId: '76782042155',
        iframeContainerId: 'eventbrite-widget-container-76782042155',

        // Optional
        iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: exampleCallback  // Method called when an order has successfully completed
    });
</script>*/
  componentDidMount() {
    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: '76782042155',
      modal: true,
      modalTriggerElementId: 'eventbrite-widget-modal-trigger-76782042155',
      onOrderComplete: console.log('done')
    })
  }
  render() {
    return (
      <div>
        <Item.Group divided relaxed style={{ display: 'grid', justifyContent: 'center', paddingTop: '50px' }}>
          <Item style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
            <Item.Content
              style={{ alignSelf: 'center', textAlign: 'center', fontSize: 'xx-large', paddingRight: '2vw' }}
            >
              <Item.Header>11</Item.Header>
              <Item.Description>October</Item.Description>
            </Item.Content>
            <Item.Content style={{ maxWidth: '700px' }}>
              <div style={{ paddingBottom: '10px' }}>
                <Segment>
                  This is a test meeting this is where meeting description shows up. The RSVP button for this meeting
                  section should work the ones below this are same duplicates.
                </Segment>
              </div>
              <Button id="eventbrite-widget-modal-trigger-76782042155" primary floated="right">
                RSVP
                <Icon name="right chevron" />
              </Button>
            </Item.Content>
          </Item>

          <Item style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
            <Item.Content
              style={{ alignSelf: 'center', textAlign: 'center', fontSize: 'xx-large', paddingRight: '2vw' }}
            >
              <Item.Header>11</Item.Header>
              <Item.Description>October</Item.Description>
            </Item.Content>
            <Item.Content style={{ maxWidth: '700px' }}>
              <div style={{ paddingBottom: '10px' }}>
                <Segment>This is a test meeting this is where meeting description shows up.</Segment>
              </div>
              <Button id="eventbrite-widget-modal-trigger-76782042155" primary floated="right">
                RSVP
                <Icon name="right chevron" />
              </Button>
            </Item.Content>
          </Item>

          <Item style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
            <Item.Content
              style={{ alignSelf: 'center', textAlign: 'center', fontSize: 'xx-large', paddingRight: '2vw' }}
            >
              <Item.Header>11</Item.Header>
              <Item.Description>October</Item.Description>
            </Item.Content>
            <Item.Content style={{ maxWidth: '700px' }}>
              <div style={{ paddingBottom: '10px' }}>
                <Segment>This is a test meeting this is where meeting description shows up.</Segment>
              </div>
              <Button id="eventbrite-widget-modal-trigger-76782042155" primary floated="right">
                RSVP
                <Icon name="right chevron" />
              </Button>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    )
  }
}
