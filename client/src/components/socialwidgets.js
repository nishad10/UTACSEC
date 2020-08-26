import React from 'react';
import showDiscord from './discord';
import { Grid, Container } from 'semantic-ui-react';
const SocailWidgets = (props) => {
  const { mobile } = props;
  return !mobile ? (
    <Grid.Row
      columns="equal"
      style={{ background: '#1b1c1d', display: 'flex' }}
    >
      <Grid.Column style={{ maxWidth: '30em', minHeight: '500px' }}>
        {showDiscord(mobile)}
      </Grid.Column>
      <Grid.Column textAlign="center">
        <Container style={{ color: 'white' }} text textAlign="center">
          <a
            className="twitter-timeline"
            data-height={mobile ? '250' : '500'}
            data-theme="dark"
            data-link-color="#2B7BB9"
            data-chrome="noscrollbar transparent nofooter"
            href="https://twitter.com/UTA_CSEC?ref_src=twsrc%5Etfw"
          />
        </Container>
      </Grid.Column>
    </Grid.Row>
  ) : (
    <Grid.Row centered style={{ background: '#1b1c1d' }}>
      <Container style={{ color: 'white' }} text textAlign="center">
        <a
          className="twitter-timeline"
          data-height={mobile ? '250' : '500'}
          data-theme="dark"
          data-link-color="#2B7BB9"
          data-chrome="noscrollbar transparent nofooter"
          href="https://twitter.com/UTA_CSEC?ref_src=twsrc%5Etfw"
        />
      </Container>
    </Grid.Row>
  );
};
export default SocailWidgets;
