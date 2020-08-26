import React from 'react';
import { Container } from 'semantic-ui-react';
import Activities from '../../components/activities';
import TopicsCovered from '../../components/topicsCovered';
import Faq from '../../components/faq';

const About = (props) => {
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
  );
};

export default About;
