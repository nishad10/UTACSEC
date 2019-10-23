import React, { useState, useEffect } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import showDiscord from '../../components/discord'
import HomepageHeader from '../../components/homepageHeader'
import SocialButtons from '../../components/socialButtons'
import Activities from '../../components/activities'
import TopicsCovered from '../../components/topicsCovered'
import Faq from '../../components/faq'
import MeetingFooter from '../../components/meetingFooter'

const Home = props => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowSizeChange)
  }, [])

  return (
    <div>
      <Grid style={{ backgroundColor: 'black', lineHeight: '2vw', padding: '1vw' }}>
        <HomepageHeader />
        <SocialButtons />
        <Divider inverted style={{ margin: '0px' }} />
        <Grid.Row>
          <Grid celled="internally" columns="equal" style={{ display: 'flex' }}>
            {showDiscord(width)}
            <Grid.Column style={{}}>
              <Activities />
              <TopicsCovered />
            </Grid.Column>
          </Grid>
        </Grid.Row>
        <Grid.Row centered>
          <Faq />
        </Grid.Row>
        <Grid.Row centered>
          <MeetingFooter />
        </Grid.Row>
      </Grid>
    </div>
  )
}
export default Home
