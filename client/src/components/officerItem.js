import React, { useState, useEffect } from 'react'
import { Image, Segment, Card, Grid } from 'semantic-ui-react'

const OfficerItem = ({ name, position, email, description, imgSource, mobile }) => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowSizeChange)
  }, [])
  return (
    <Grid.Row style={{ padding: '1vw 7vw 1vw 7vw' }}>
      <div style={{ width: '100%' }}>
        <Segment
          inverted
          textAlign="left"
          style={{ fontSize: width > 1200 ? '25px' : '2vw', display: 'flex', border: '0.2vw solid #535353' }}
        >
          <div style={{ width: mobile ? '20vw' : '15em', fontSize: '1vw', alignSelf: 'center' }}>
            <Card>
              <Image style={{ width: mobile ? '20vw' : '15em' }} src={imgSource} wrapped ui={false} />
              <Card.Content style={{ paddingBottom: '0px' }}>
                <Card.Header>{name}</Card.Header>

                <Card.Description>{position}</Card.Description>
              </Card.Content>
              <Card.Content extra style={{ paddingBottom: '0px', paddingTop: '0px', display: 'flex' }}>
                {email}
              </Card.Content>
            </Card>
          </div>
          <div
            style={{
              alignSelf: 'center',
              paddingLeft: '5vw',
              paddingBottom: mobile ? '5vw' : '2em',
              lineHeight: '4vw'
            }}
          >
            {description}
          </div>
        </Segment>
      </div>
    </Grid.Row>
  )
}
export default OfficerItem
