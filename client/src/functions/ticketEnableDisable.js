import React from 'react'
import { Button, Icon, Header, Modal } from 'semantic-ui-react'

const ticketEnableDisable = (confirm, trigger, mobile) => {
  return confirm ? (
    <Button
      style={{
        fontSize: mobile ? '3.2vw' : '1vw',
        float: 'right',
        background: '#DE6E4B'
      }}
      id={trigger}
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
        <Button
          style={{
            fontSize: mobile ? '3.2vw' : '1vw',
            float: 'right',
            background: '#DE6E4B'
          }}
        >
          RSVP
          <Icon name="right chevron" />
        </Button>
      }
      closeIcon
    >
      <Header icon="ticket" content="Event Unavailable" />
      <Modal.Content>
        <p>
          The event hasnt been confirmed yet or the tickets are not available.
          Check back soon!!
        </p>
      </Modal.Content>
    </Modal>
  )
}
export default ticketEnableDisable
