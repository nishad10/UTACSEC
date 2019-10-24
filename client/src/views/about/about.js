import React, { useState, useEffect } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import showDiscord from '../../components/discord'
import Activities from '../../components/activities'
import TopicsCovered from '../../components/topicsCovered'
import Faq from '../../components/faq'

const About = props => {
  return (
    <div>
      <Activities />
      <TopicsCovered />

      <Faq />
    </div>
  )
}

export default About
