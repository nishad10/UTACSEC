import React from 'react'
import { List, Header, Segment } from 'semantic-ui-react'

const Faq = () => {
  return (
    <Segment vertical>
      <Header as="h3" block>
        FAQ
      </Header>
      <Segment inverted textAlign="left">
        <List bulleted divided inverted relaxed>
          <List.Item>
            <List.Content>
              <List.Header>Do I need to know anything before hand to be part of the club?</List.Header>
              No, as long as you have some knowledge with coding or computers and interest in security you should be
              good to go.
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>What equipment do I need while attending the club meetings?</List.Header>We use kali linux
              for most of the practical work so you will need to have a laptop that can run kali linux
              virtually(recommended) or on the system itself.
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>How do I join the club?</List.Header>
              Click the join now button on the home page of our website.
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    </Segment>
  )
}
export default Faq
