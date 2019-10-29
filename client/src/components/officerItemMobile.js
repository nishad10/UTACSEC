import React from 'react'
import { Image, Card, Divider, Header, Modal } from 'semantic-ui-react'

const OfficerItemMobile = ({ name, position, email, description, imgSource }) => {
  return (
    <Modal
      basic
      centered
      size="tiny"
      trigger={
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '50%' }}>
            <Card>
              <Image
                src={imgSource}
                label={{
                  as: 'div',
                  style: { background: 'rgb(91, 192, 190)', fontSize: '2.5vw' },
                  color: 'white',
                  content: 'Click for Info',
                  ribbon: true
                }}
              />
              <Card.Content>
                <Card.Header style={{ fontSize: '18px' }}>{position}</Card.Header>
              </Card.Content>
              <Card.Content extra style={{ fontSize: '14px' }}>
                {email}
              </Card.Content>
            </Card>
            <Header inverted style={{ margin: '0', color: '#DE6E4B', fontSize: '25px', textAlign: 'center' }}>
              {' '}
              {name}
            </Header>
            <Divider inverted />
          </div>
        </div>
      }
      closeIcon
    >
      <Header icon="info circle" content="About Me" />
      <Modal.Content>
        <p>{description}</p>
      </Modal.Content>
    </Modal>
  )
}
export default OfficerItemMobile
