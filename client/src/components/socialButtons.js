import React, { useEffect, useState } from 'react'
import { upTwitter } from '../actions'

import { Grid, Button, Icon, Segment, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'

const SocialButtons = props => {
  const { getTwitter, twitterCount } = props
  const [discordCount, setDiscordCount] = useState(0)
  useEffect(() => {
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
)(SocialButtons)
