import React, { useState, useEffect } from 'react'
import { Grid, Image, Button, Icon, Label, Divider, Header, Segment, List, Modal } from 'semantic-ui-react'
import { whatBrowser, upTwitter } from '../../actions'
import { connect } from 'react-redux'
import Discord from '../../components/discord'
import { Link } from 'react-router-dom'
const showDiscord = width => {
  const isMobile = width <= 500
  if (isMobile) {
    return
  } else
    return (
      <Grid.Column floated="left" style={{ maxWidth: '27vw', maxHeight: '80vw', minWidth: '200px' }}>
        <Discord />
      </Grid.Column>
    )
}
const Home = props => {
  const { getTwitter, twitterCount } = props
  const [discordCount, setDiscordCount] = useState(0)
  const [width, setWidth] = useState(window.innerWidth)
  const [chrome, setChrome] = useState(false)

  useEffect(() => {
    console.log(whatBrowser(), 'browser')
    setChrome(whatBrowser())
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowSizeChange)
    const discordBot = require('discord.js')
    const client = new discordBot.Client()
    client.login(process.env.DISCORD_API)
    client.on('ready', () => {
      client.user.setActivity('Someone use my Website', {
        type: 'WATCHING',
        url: 'https://www.utacsec.org'
      })
      setDiscordCount(client.users.size)
    })
    getTwitter()
  }, [])

  return (
    <div>
      <Grid style={{ backgroundColor: 'black', lineHeight: '2vw', padding: '1vw' }}>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Segment inverted style={{ display: 'flex', justifyContent: 'center', padding: '1vw' }}>
              <div style={{ width: '20vw', maxWidth: '200px', alignSelf: 'center' }}>
                <Image
                  floated="left"
                  fluid
                  src="https://pbs.twimg.com/profile_images/887044871445295105/9bQlT5Xi_400x400.jpg"
                />
              </div>
              <Segment inverted style={{ alignSelf: 'center', padding: '1vw' }}>
                <Header style={{ fontSize: '3vw' }} inverted>
                  University of Texas at Arlington
                  <Header.Subheader style={{ fontSize: '2vw' }}>Cyber Security Club</Header.Subheader>
                </Header>
                <Link to="/joinnow">
                  <Button animated color="green" style={{ fontSize: '1.5vw' }}>
                    <Button.Content visible>Join Now</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                </Link>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Segment inverted style={{ alignSelf: 'center', padding: '1vw' }}>
            <a href="https://twitter.com/UTA_CSEC" target="_blank" rel="noopener noreferrer">
              <Button as="div" labelPosition="right" style={{ fontSize: '1vw' }}>
                <Button color="twitter" style={{ fontSize: '1.5vw' }}>
                  <Icon name="twitter" />
                  Twitter
                </Button>
                <Label as="a" basic color="twitter" pointing="left" style={{ fontSize: '1.5vw' }}>
                  {twitterCount} Followers
                </Label>
              </Button>
            </a>
            <a href="https://www.facebook.com/groups/311122589070567/" target="_blank" rel="noopener noreferrer">
              <Button color="facebook" style={{ fontSize: '1.5vw' }}>
                <Icon name="facebook" /> Facebook
              </Button>
            </a>
            <a href="https://discord.gg/F9wZjBe" target="_blank" rel="noopener noreferrer">
              <Button as="div" labelPosition="right" style={{ fontSize: '1vw' }}>
                <Button style={{ fontSize: '1.5vw', color: 'white', background: '#7289DA' }}>
                  <Icon name="discord" />
                  Discord
                </Button>
                <Label as="a" basic color="white" pointing="left" style={{ fontSize: '1.5vw' }}>
                  {discordCount} Members
                </Label>
              </Button>
            </a>
          </Segment>
        </Grid.Row>
        <Divider inverted style={{ margin: '0px' }} />
        <Grid.Row>
          <Grid celled="internally" columns="equal" style={{ display: 'flex' }}>
            {showDiscord(width)}
            <Grid.Column style={{}}>
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
                          <List.Header>Social Engineering</List.Header>We use Methods used by those with malicious
                          intent to access computer systems by means of social manipulation, personal information
                          collecting, and other means.
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header> Cybersecurity Software and Hardware</List.Header>
                          Software and hardware tools used by CyberSec administrators to safeguard systems, as well as
                          those used by malicious agents to access protected systems.
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header>Cryptography</List.Header>
                          How encryption and decryption of information works, methods used by malicious agents to bypass
                          or break encryption, and methods used to encrypt data for malicious reasons
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header>Offensive Tactics</List.Header>
                          Vulnerabilities used to access systems and data such as phishing, backdoors and bugs, as well
                          as activities committed with that access, such as DDoS attacks, botnets, covert cryptocurrency
                          mining, doxxing, etc.
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header>Defensive Tactics</List.Header>
                          Methods used to protect the personal information, data, and identity of security conscious
                          individuals, including those used by malicious actors, such as VPN, Tor, 2FA, etc.
                        </List.Content>
                      </List.Item>
                    </List>
                  </Segment>
                </Segment>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Grid.Row>
        <Grid.Row centered>
          <Segment style={{ padding: '1vw' }} vertical>
            <Header as="h3" style={{ fontSize: '2vw', padding: '1.5vw' }} block>
              FAQ
            </Header>
            <Segment inverted textAlign="left" style={{ fontSize: '2vw', padding: '1vw' }}>
              <List bulleted divided inverted relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header>Do I need to know anything before hand to be part of the club?</List.Header>
                    No, as long as you have some knowledge with coding or computers and interest in security you should
                    be good to go.
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>What equipment do I need while attending the club meetings?</List.Header>We use kali
                    linux for most of the practical work so you will need to have a laptop that can run kali linux
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
        </Grid.Row>
        <Grid.Row centered>
          <Segment inverted style={{ width: '100%' }}>
            <Header as="h3" style={{ fontSize: '2vw' }}>
              Meetings Information
            </Header>
            <p style={{ fontSize: '1.5vw' }}>Meetings are in ERB 316 every other Friday at 5 PM</p>
            {chrome === true ? (
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=uta.csec@gmail.com&tf=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="large" style={{ fontSize: '1.5vw' }}>
                  Email: uta.csec@gmail.com
                </Button>
              </a>
            ) : (
              <Modal
                basic
                centered
                size="tiny"
                trigger={
                  <Button size="large" style={{ fontSize: '1.5vw' }}>
                    Email: uta.csec@gmail.com
                  </Button>
                }
                closeIcon
              >
                <Header icon="chrome" content="Not a chrome browser" />
                <Modal.Content>
                  <p>
                    Please open this in chrome to auto compile a mail to join the club or just mail us your Full Name
                    and mavs email address to uta.csec@gmail.com.
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
        </Grid.Row>
      </Grid>
    </div>
  )
}
const mapStateToProps = state => ({
  twitterCount: state.general.twitterFollowers
})
const mapDispatchToProps = dispatch => ({
  getTwitter: () => dispatch(upTwitter())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
/*
Gmail Button template disabled till we get mandrill api set up
   <Button as="div" labelPosition="right">
              <Button color="red">
                <Icon name="google" />
                Gmail
              </Button>
              <Label as="a" basic color="red" pointing="left">
                2,048 Mailing List
              </Label>
            </Button>
*/
