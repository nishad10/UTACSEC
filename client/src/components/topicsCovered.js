import React, { Component } from 'react'
import { Grid, Accordion, Header, Segment, Icon } from 'semantic-ui-react'

export default class TopicsCovered extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
  }

  render() {
    const { activeIndex } = this.state
    const handleClick = (e, titleProps) => {
      const { index } = titleProps

      const newIndex = activeIndex === index ? -1 : index

      this.setState({ activeIndex: newIndex })
    }

    return (
      <Grid.Row>
        <Segment inverted style={{ width: '100%' }}>
          <Header as="h3" style={{ fontSize: '25px', color: 'rgb(91, 192, 190)' }} inverted textAlign="center">
            Topics Covered
          </Header>
          <Segment inverted>
            <Accordion inverted>
              <Accordion.Title active={activeIndex === 0} index={0} onClick={handleClick} style={{ fontSize: '18px' }}>
                <Icon name="dropdown" />
                Penetration Testing
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>
                  Hacking of computer security systems through technical and ethical means to determine how secure they
                  are.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex === 1} index={1} onClick={handleClick} style={{ fontSize: '18px' }}>
                <Icon name="dropdown" />
                Social Engineering
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>
                  Looking at Methods used by those with malicious intent to access computer systems by means of social
                  manipulation, personal information collecting, and other means.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex === 2} index={2} onClick={handleClick} style={{ fontSize: '18px' }}>
                <Icon name="dropdown" />
                Cybersecurity Software and Hardware
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>
                  Software and hardware tools used by CyberSec administrators to safeguard systems, as well as those
                  used by malicious agents to access protected systems.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex === 3} index={3} onClick={handleClick} style={{ fontSize: '18px' }}>
                <Icon name="dropdown" />
                Cryptography
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 3}>
                <p>
                  How encryption and decryption of information works, methods used by malicious agents to bypass or
                  break encryption, and methods used to encrypt data for malicious reasons.
                </p>
              </Accordion.Content>
              <Accordion.Title active={activeIndex === 4} index={4} onClick={handleClick} style={{ fontSize: '18px' }}>
                <Icon name="dropdown" />
                Offensive Tactics
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 4}>
                <p>
                  Vulnerabilities used to access systems and data such as phishing, backdoors and bugs, as well as
                  activities committed with that access, such as DDoS attacks, botnets, covert cryptocurrency mining,
                  doxxing, etc.
                </p>
              </Accordion.Content>
              <Accordion.Title active={activeIndex === 5} index={5} onClick={handleClick} style={{ fontSize: '18px' }}>
                <Icon name="dropdown" />
                Defensive Tactics
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 5}>
                <p>
                  Methods used to protect the personal information, data, and identity of security conscious
                  individuals, including those used by malicious actors, such as VPN, Tor, 2FA, etc.
                </p>
              </Accordion.Content>
            </Accordion>
          </Segment>
        </Segment>
      </Grid.Row>
    )
  }
}
/*
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
          */
