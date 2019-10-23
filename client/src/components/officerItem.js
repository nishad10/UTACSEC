import React from 'react'
import { Image, Segment, Card, Grid, Icon } from 'semantic-ui-react'

const OfficerItem = ({ name, position, email, description, imgSource }) => {
  return (
    <Grid.Row style={{ padding: '1vw 7vw 1vw 7vw', display: 'flex' }}>
      <div style={{ display: 'flex', width: '100%' }}>
        <Segment
          inverted
          textAlign="left"
          style={{ fontSize: '2vw', display: 'flex', width: '100%', border: '0.2vw solid #535353' }}
        >
          <div style={{ width: '20vw', fontSize: '1vw' }}>
            <Card>
              <Image src={imgSource} wrapped ui={false} />
              <Card.Content style={{ paddingBottom: '0px' }}>
                <Card.Header>{name}</Card.Header>

                <Card.Description>{position}</Card.Description>
              </Card.Content>
              <Card.Content extra style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                <a>
                  <Icon name="mail" />
                  {email}
                </a>
              </Card.Content>
            </Card>
          </div>
          <div style={{ alignSelf: 'center', paddingLeft: '5vw', paddingBottom: '5vw' }}>{description}</div>
        </Segment>
      </div>
    </Grid.Row>
  )
}
export default OfficerItem
