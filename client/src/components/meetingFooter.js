import React, { useState, useEffect } from 'react'
import { Modal, Header, Segment, Button, Icon } from 'semantic-ui-react'
import { whatBrowser } from '../actions'
const MeetingFooter = () => {
  const [chrome, setChrome] = useState(false)
  useEffect(() => {
    console.log(whatBrowser(), 'browser')
    setChrome(whatBrowser())
  }, [])
  return (
    <Segment inverted style={{ width: '100%' }}>
      <Header as="h3">Meetings Information</Header>
      <p>Meetings are in ERB 316 every other Friday at 5 PM</p>
      {chrome === true ? (
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=uta.csec@gmail.com&tf=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="large">Email: uta.csec@gmail.com</Button>
        </a>
      ) : (
        <Modal basic centered size="tiny" trigger={<Button size="large">Email: uta.csec@gmail.com</Button>} closeIcon>
          <Header icon="chrome" content="Not a chrome browser" />
          <Modal.Content>
            <p>
              Please open this in chrome to auto compile a mail to join the club or just mail us your Full Name and mavs
              email address to uta.csec@gmail.com.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green">
              <Icon name="checkmark" /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      )}
    </Segment>
  )
}
export default MeetingFooter
