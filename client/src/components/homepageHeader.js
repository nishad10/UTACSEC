import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Header, Container, Image } from 'semantic-ui-react'
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
      <div
        style={{
          display: 'flex',
          paddingRight: mobile ? '0vw' : '6vw',
          justifyContent: mobile ? '' : 'center'
        }}
      >
        <Image
          size="tiny"
          src="/statics/favicon.ico"
          style={{ alignSelf: 'center', paddingRight: '10px' }}
        />
        <Header
          as="h2"
          content="Cyber Security Club"
          inverted
          style={{
            alignSelf: 'center',
            fontSize: mobile ? '1.5em' : '3em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
            marginBottom: mobile ? '0.5em' : '1.5em'
          }}
        />
      </div>
      <div style={{ marginBottom: '4em' }}>
        <a
          style={{ color: '#21ba45' }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSejy06lsYjchT5N34ImgAPdWw9CpmS0hrJ9R2tUbrVk-JCyHA/viewform?usp=sf_link"
        >
          <Button
            animated
            basic
            color="green"
            style={{
              fontSize: mobile ? '0.8em' : '1.5em',
              fontWeight: 'normal'
            }}
          >
            <Button.Content visible> Join Now</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </a>
      </div>
      <div
        style={{
          animationDuration: '1.5s',
          animationName: 'bounce',
          animationIterationCount: 'infinite'
        }}
      >
        <Link to="/recruit">
          <h1 style={{ fontSize: mobile ? '18px' : '24px', color: '#de6e4b' }}>
            3 New officer positions are availaible. Apply Now!
          </h1>
        </Link>
      </div>
    </Container>
  )
}
export default HomepageHeader
