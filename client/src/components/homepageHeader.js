import React from 'react'
import { Grid, Image, Button, Icon, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HomepageHeader = () => {
  return (
    <Grid.Row>
      <Grid.Column textAlign="center">
        <Segment inverted style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '20vw', maxWidth: '200px', alignSelf: 'center' }}>
            <Image
              floated="left"
              fluid
              src="https://pbs.twimg.com/profile_images/887044871445295105/9bQlT5Xi_400x400.jpg"
            />
          </div>
          <Segment inverted style={{ alignSelf: 'center' }}>
            <Header as="h3" inverted>
              University of Texas at Arlington
              <Header.Subheader as="h3">Cyber Security Club</Header.Subheader>
            </Header>
            <Link to="/joinnow">
              <Button animated color="green">
                <Button.Content visible>Join Now</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Link>
          </Segment>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  )
}
export default HomepageHeader
