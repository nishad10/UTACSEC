import React, { useState, useEffect } from 'react'
import { Grid, Image, Button, Icon, Label, Divider, Header, Segment, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { upTwitter } from '../../actions'
import { connect } from 'react-redux'
import { Discord } from '../../components/discord'
const showDiscord = width => {
  const isMobile = width <= 500
  console.log(isMobile)
  if (isMobile) {
    return
  } else
    return (
      <Grid.Column floated="left" style={{ minWidth: '200px', maxWidth: '20vw', height: '100%' }}>
        <Discord />
      </Grid.Column>
    )
}
const Home = props => {
  const { getTwitter, twitterCount } = props
  const [discordCount, setDiscordCount] = useState(0)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowSizeChange = () => {
      console.log('called')
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowSizeChange)
    const discordBot = require('discord.js')
    const client = new discordBot.Client()
    console.log(process.env.API_URI)
    client.login(process.env.API_URI)
    client.on('ready', () => {
      // console.log('in')
      setDiscordCount(client.users.size)
    })
    getTwitter()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <Grid style={{ fontSize: '1.5vw', backgroundColor: 'black', lineHeight: '2vw' }}>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Segment inverted style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '20vw', maxWidth: '200px' }}>
                <Image
                  floated="left"
                  fluid
                  src="https://pbs.twimg.com/profile_images/887044871445295105/9bQlT5Xi_400x400.jpg"
                />
              </div>
              <Segment inverted style={{ alignSelf: 'center' }}>
                <Header style={{ fontSize: '3vw' }} inverted>
                  University of Texas at Arlington
                  <Header.Subheader style={{ fontSize: '2vw' }}>Cyber Security Club</Header.Subheader>
                </Header>
                <Button as={Link} to="/signup" animated color="green">
                  <Button.Content visible>Join Now</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Segment inverted style={{ alignSelf: 'center', background: '#1b1c1d' }}>
            <Button as="div" labelPosition="right">
              <Button color="twitter">
                <Icon name="twitter" />
                Twitter
              </Button>
              <Label as="a" basic color="twitter" pointing="left">
                {twitterCount} Followers
              </Label>
            </Button>
            <Button as="div" labelPosition="right">
              <Button color="black">
                <Icon name="discord" />
                Discord
              </Button>
              <Label as="a" basic color="black" pointing="left">
                {discordCount} Members
              </Label>
            </Button>
            <Button as="div" labelPosition="right">
              <Button color="red">
                <Icon name="google" />
                Gmail
              </Button>
              <Label as="a" basic color="red" pointing="left">
                2,048 Mailing List
              </Label>
            </Button>
          </Segment>
        </Grid.Row>
        <Divider inverted />
        <Grid.Row>
          <Grid celled="internally" columns="equal" style={{ display: 'flex' }}>
            {showDiscord(width)}
            <Grid.Column style={{}}>
              <Grid.Row>
                <Segment inverted style={{ width: '100%' }}>
                  <Header as="h3" style={{ fontSize: '2vw' }} inverted block textAlign="center">
                    Activities
                  </Header>
                  <Segment inverted style={{ fontSize: '1vw' }}>
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
                          Such as CET (Certified Ethical Hacker), CompTIA Security+, CCNA, and others
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
                <Segment inverted style={{ width: '100%' }}>
                  <Header as="h3" style={{ fontSize: '2vw' }} inverted block textAlign="center">
                    Topics Covered
                  </Header>
                  <Segment inverted style={{ fontSize: '1vw' }}>
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
                          individuals, including those used by malicious actors, such as VPN's, Tor, 2FA, etc.
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
          <Segment style={{ padding: '1em' }} vertical>
            <Header as="h3" style={{ fontSize: '2vw' }} block>
              FAQ
            </Header>
            <Segment inverted textAlign="left" style={{ fontSize: '1vw' }}>
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
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            ></Divider>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Meetings Information
            </Header>
            <p style={{ fontSize: '1.33em' }}>Meetings are in ERB 316 every other Friday at 5 PM</p>
            <Button as={Link} to="www.google.com" size="large">
              Email: uta.csec@gmail.com
            </Button>
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

/* <Grid.Row color="grey">
            <Grid.Column>
              <Button color="twitter">
                <Icon name="twitter" />
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button>
                <Icon name="discord" />
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button>
                <Icon name="mail" />
              </Button>
            </Grid.Column>
          </Grid.Row>*/

/*
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Segment inverted style={{ display: 'flex', alignSelf: 'center' }}>
                <Image src="https://pbs.twimg.com/profile_images/887044871445295105/9bQlT5Xi_400x400.jpg" />
                <Segment inverted style={{ alignSelf: 'center', paddingLeft: '25vw' }}>
                  <Header style={{ fontSize: '3vw' }} inverted>
                    University of Texas at Arlington
                    <Header.Subheader style={{ fontSize: '2vw' }}>Cyber Security Club</Header.Subheader>
                  </Header>
                  <Button as={Link} to="/signup" animated color="green">
                    <Button.Content visible>Join Now</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                </Segment>
              </Segment>
            </Grid.Column>
          </Grid.Row>*/
