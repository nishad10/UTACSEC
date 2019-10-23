import React from 'react'
import { Button, Icon, Header, Modal } from 'semantic-ui-react'

const ticketEnableDisable = (confirm, trigger) => {
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
export default ticketEnableDisable
