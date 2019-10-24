import React, { useState, useEffect } from 'react'
import { Grid, Divider, Header, Container } from 'semantic-ui-react'
import showDiscord from '../../components/discord'
import HomepageHeader from '../../components/homepageHeader'
import Social from '../../components/social'
import MeetingFooter from '../../components/meetingFooter'

const Home = props => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowSizeChange)
  }, [])
  const mobile = width < 600

  return (
    <div>
      <Grid>
        <Grid.Row>
          <HomepageHeader mobile={mobile} />
        </Grid.Row>
        <Divider inverted style={{ margin: '6em 7em' }} />
        <Social mobile={mobile} />
        <Divider inverted style={{ margin: '5em 7em' }} />
        <Grid.Row style={{ background: '#1b1c1d' }}>
          <Grid celled="internally" columns="equal" style={{ display: 'flex' }}>
            {showDiscord(mobile)}
            <Grid.Column>
              <Container style={{ color: 'white' }} text textAlign="center">
                <a
                  className="twitter-timeline"
                  data-width="1000"
                  data-height={mobile ? '250' : '500'}
                  data-theme="dark"
                  data-link-color="#2B7BB9"
                  data-chrome="noscrollbar transparent nofooter"
                  href="https://twitter.com/UTA_CSEC?ref_src=twsrc%5Etfw"
                ></a>
              </Container>
            </Grid.Column>
          </Grid>
        </Grid.Row>
        <Divider inverted style={{ margin: '5em 7em' }} />
        <Grid.Row centered>
          <Container style={{ color: 'white' }} textAlign="center">
            <Header
              as="h1"
              content="Sponsors"
              inverted
              style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: mobile ? '0.5em' : '1em'
              }}
            />
            <Header
              as="h1"
              content="  We are looking for Sponsors for our Non-Profit Club.If you would like to have your logo on the website in this section by sponsoring us for special one time
              events or for other types of long term sponsorships, please send us an email or get in contact with us. "
              inverted
              style={{
                fontSize: mobile ? '1em' : '1.5em',
                fontWeight: 'normal'
              }}
            />
          </Container>
        </Grid.Row>
        <Divider inverted style={{ margin: '5em 7em' }} />
        <Grid.Row centered>
          <MeetingFooter mobile={mobile} />
        </Grid.Row>
      </Grid>
    </div>
  )
}
export default Home
