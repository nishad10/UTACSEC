import React from 'react'
import { Grid, List, Header, Segment } from 'semantic-ui-react'

const TopicsCovered = () => {
  return (
    <Grid.Row>
      <Segment inverted style={{ width: '100%', padding: '1vw' }}>
        <Header as="h3" style={{ fontSize: '2vw', padding: '1.5vw' }} inverted block textAlign="center">
          Topics Covered
        </Header>
        <Segment inverted style={{ fontSize: '2vw', padding: '1vw' }}>
          <List bulleted divided inverted relaxed>
            <List.Item>
              <List.Content>
                <List.Header>Penetration Testing</List.Header>
                Hacking of computer security systems through technical means to determine how secure they are.
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Social Engineering</List.Header>We use Methods used by those with malicious intent to
                access computer systems by means of social manipulation, personal information collecting, and other
                means.
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header> Cybersecurity Software and Hardware</List.Header>
                Software and hardware tools used by CyberSec administrators to safeguard systems, as well as those used
                by malicious agents to access protected systems.
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Cryptography</List.Header>
                How encryption and decryption of information works, methods used by malicious agents to bypass or break
                encryption, and methods used to encrypt data for malicious reasons
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Offensive Tactics</List.Header>
                Vulnerabilities used to access systems and data such as phishing, backdoors and bugs, as well as
                activities committed with that access, such as DDoS attacks, botnets, covert cryptocurrency mining,
                doxxing, etc.
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Defensive Tactics</List.Header>
                Methods used to protect the personal information, data, and identity of security conscious individuals,
                including those used by malicious actors, such as VPN, Tor, 2FA, etc.
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </Segment>
    </Grid.Row>
  )
}
export default TopicsCovered
