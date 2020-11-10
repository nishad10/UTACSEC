import React, { useState, useEffect } from 'react';
import { Grid, Divider, Header, Container, Image } from 'semantic-ui-react';
import HomepageHeader from '../../components/homepageHeader';
import Social from '../../components/social';
import MeetingFooter from '../../components/meetingFooter';
import SocialWidgets from '../../components/socialwidgets';

const Home = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowSizeChange);
  }, []);
  const mobile = width < 600;

  return (
    <div>
      <Grid>
        <Grid.Row>
          <HomepageHeader mobile={mobile} />
        </Grid.Row>
        <Divider inverted style={{ margin: '2.5em' }} />
        <Social mobile={mobile} />
        <Divider inverted style={{ margin: '5em 7em' }} />
        <SocialWidgets mobile={mobile} />
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
                marginBottom: mobile ? '0.5em' : '1em',
              }}
            />
            <Image centered src="/statics/ISACA.png" />
          </Container>
        </Grid.Row>
        <Divider inverted style={{ margin: '5em 7em' }} />
        <Grid.Row centered>
          <MeetingFooter mobile={mobile} />
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default Home;
