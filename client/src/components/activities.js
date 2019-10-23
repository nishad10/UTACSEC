import React from 'react'
import { Grid, List, Header, Segment } from 'semantic-ui-react'

const Activities = () => {
  return (
    <Grid.Row>
      <Segment inverted style={{ width: '100%', padding: '1vw' }}>
        <Header as="h3" style={{ fontSize: '2vw', padding: '1.5vw' }} inverted block textAlign="center">
          Activities
        </Header>
        <Segment inverted style={{ fontSize: '2vw', padding: '1vw' }}>
          <List bulleted divided inverted relaxed>
            <List.Item>
              <List.Content>
                <List.Header>Tutorials on Kali Linux and included tools</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>CyberSec hardware demos</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Social Engineering Tactics</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>OPSEC (Operational Security) Guidelines</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Information on IT/cybersecurity certificates</List.Header>
                Such as CEH (Certified Ethical Hacker), CompTIA Security+, CCNA, and others
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>CTF (Capture The Flag) challenges</List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </Segment>
    </Grid.Row>
  )
}
export default Activities
