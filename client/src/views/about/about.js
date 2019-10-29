import React, { useState, useEffect } from 'react'
import { Grid, Divider, Tab, Container, Accordion } from 'semantic-ui-react'
import showDiscord from '../../components/discord'
import Activities from '../../components/activities'
import TopicsCovered from '../../components/topicsCovered'
import Faq from '../../components/faq'

const About = props => {
  return (
    <div>
      <Container text style={{ paddingTop: '5vw' }}>
        <Activities />
      </Container>
      <Container text style={{ paddingTop: '1vw' }}>
        <TopicsCovered />
      </Container>
      <Container text style={{ paddingTop: '1vw' }}>
        <Faq />
      </Container>
    </div>
  )
}

export default About
