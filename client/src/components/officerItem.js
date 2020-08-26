import React from 'react';
import { Image, Card, Grid, Container, Header } from 'semantic-ui-react';

const OfficerItem = ({
  name,
  position,
  email,
  description,
  imgSource,
  mobile,
}) => {
  return (
    <Grid.Row style={{ padding: '1vw 7vw 1vw 7vw' }}>
      <div style={{ width: '100%' }}>
        <Container
          fluid
          textAlign="left"
          style={{
            fontSize: '20px',
            display: 'flex',
            color: 'white',
          }}
        >
          <div style={{ width: '17em', fontSize: '1vw', alignSelf: 'center' }}>
            <Card>
              <Image src={imgSource} />
              <Card.Content>
                <Card.Header style={{ fontSize: '25px' }}>
                  {position}
                </Card.Header>
              </Card.Content>
              <Card.Content extra style={{ fontSize: '16px' }}>
                {email}
              </Card.Content>
            </Card>
          </div>

          <div
            style={{
              alignSelf: 'center',
              paddingLeft: '5vw',
              lineHeight: '1.375em',
            }}
          >
            <Header
              inverted
              style={{
                padding: '0vw 0vw 1vw 0vw',
                color: '#DE6E4B',
                fontSize: '35px',
              }}
            >
              {' '}
              {name}
            </Header>
            {description}
          </div>
        </Container>
      </div>
    </Grid.Row>
  );
};
export default OfficerItem;
