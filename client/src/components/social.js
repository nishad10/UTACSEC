import React, { useEffect, useState } from 'react';
import { upTwitter, browser } from '../actions';
import { info } from '../functions/info';
import { Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Social = (props) => {
  const { getTwitter, twitterCount, mobile } = props;
  const [discordCount, setDiscordCount] = useState(0);
  useEffect(() => {
    const discordBot = require('discord.js');
    const client = new discordBot.Client();
    client.login(process.env.DISCORD_API).catch((e) => console.log(e));
    client.on('ready', () => {
      client.user.setActivity('someone use the website.', {
        type: 'WATCHING',
        url: 'https://www.utacsec.org',
      });
      setDiscordCount(client.guilds.entries().next().value[1].memberCount);

      client.on('message', (msg) => {
        if (msg.content === 'help') {
          client.channels.get('619610352513974292').send('type activeUsers');
        }
        if (msg.content === 'activeUsers') {
          client.channels
            .get('619610352513974292')
            .send(
              `Browser:${
                browser().isChrome
                  ? 'Chrome'
                  : browser().isEdge
                  ? 'Edge'
                  : browser().isFirefox
                  ? 'Firefox'
                  : browser().isSafari
                  ? 'Safari'
                  : 'Unknown'
              } Mobile: ${info.sizeScreenW() > 900 ? 'No' : 'Yes'} Traffic:${
                info.referrer() === '' || ' '
                  ? 'Entered Link'
                  : `${info.referrer()}`
              }`
            );
        }
      });
    });
    getTwitter();
  }, []);

  return (
    <Grid.Row>
      <div style={{ width: '100%' }} textAlign="center">
        <Header
          textAlign="center"
          as="h1"
          content="Social"
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: mobile ? '2em' : '2.5em',
          }}
        />

        <Grid
          style={{ height: mobile ? '18em' : '40em', width: '100%' }}
          className="ui equal width center aligned grid container"
          id="colors"
        >
          <Grid.Row>
            <Grid.Column
              as="a"
              href="https://twitter.com/UTA_CSEC"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'rgb(29, 161, 242)' }}
            >
              <img
                src="/statics/Twitter_Logo_WhiteOnBlue.png"
                style={{
                  width: mobile ? '4em' : '10em',
                  paddingTop: mobile ? '4em' : '8em',
                }}
              />
              <p
                style={{
                  color: 'white',
                  fontSize: mobile ? '1em' : '2em',
                  paddingTop: '2.6em',
                }}
              >
                {twitterCount} Followers
              </p>
            </Grid.Column>
            <Grid.Column
              as="a"
              href="https://discord.gg/F9wZjBe"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#1b1c1d' }}
            >
              <img
                src="/statics/Discord-Logo-White.png"
                style={{
                  width: mobile ? '4em' : '10em',
                  paddingTop: mobile ? '4em' : '8em',
                }}
              />
              <p
                style={{
                  color: 'white',
                  fontSize: mobile ? '1em' : '2em',
                  paddingTop: '2.6em',
                }}
              >
                {discordCount} Members
              </p>
            </Grid.Column>
            <Grid.Column
              as="a"
              href="https://www.facebook.com/groups/311122589070567/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#3b5898' }}
            >
              <img
                src="/statics/f_logo_RGB-Blue_72.png"
                style={{
                  width: mobile ? '4em' : '10em',
                  paddingTop: mobile ? '4em' : '8em',
                }}
              />
              <p
                style={{
                  color: 'white',
                  fontSize: mobile ? '1em' : '2em',
                  paddingTop: '2.6em',
                }}
              >
                {' '}
                165 Members
              </p>
            </Grid.Column>

            <Grid.Column
              as="a"
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=uta.csec@gmail.com&tf=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#b93939' }}
            >
              <img
                src="/statics/gmail.svg"
                style={{
                  width: mobile ? '4em' : '10em',
                  paddingTop: mobile ? '4em' : '8em',
                }}
              />
              <p
                style={{
                  color: 'white',
                  fontSize: mobile ? '1em' : '2em',
                  paddingTop: '4em',
                }}
              >
                250 MailingList
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Grid.Row>
  );
};
const mapStateToProps = (state) => ({
  twitterCount: state.general.twitterFollowers,
});
const mapDispatchToProps = (dispatch) => ({
  getTwitter: () => dispatch(upTwitter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Social);
