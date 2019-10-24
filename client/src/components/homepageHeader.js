import React from 'react'
import { Button, Icon, Header, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HomepageHeader = props => {
  const { mobile } = props

  return (
    <Container text textAlign="center">
      <Header
        as="h1"
        content=" University of Texas at Arlington"
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginTop: mobile ? '1em' : '2.5em'
        }}
      />
      <Header
        as="h2"
        content="Cyber Security Club"
        inverted
        style={{
          fontSize: mobile ? '1.8em' : '2.5em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
          marginBottom: mobile ? '0.5em' : '1.5em'
        }}
      />
      <Button
        as={Link}
        to="/joinnow"
        animated
        basic
        color="green"
        style={{
          fontSize: mobile ? '0.8em' : '1.5em',
          fontWeight: 'normal'
        }}
      >
        <Button.Content visible>Join Now</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </Container>
  )
}
export default HomepageHeader

/*
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
    */
