import React, { Component } from 'react'
import { Button, Icon, Image, Item, Label, Card } from 'semantic-ui-react'
const paragraph = <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
export default class Events extends Component {
  render() {
    return (
      <div>
        <Item.Group divided relaxed style={{ display: 'grid', justifyContent: 'center', paddingTop: '50px' }}>
          <Item style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
            <Item.Content
              style={{ alignSelf: 'center', textAlign: 'center', fontSize: 'xx-large', paddingRight: '2vw' }}
            >
              <Item.Header>11</Item.Header>
              <Item.Description>October</Item.Description>
            </Item.Content>
            <Item.Content>
              <Item.Header>Meeting Topic is ABC</Item.Header>
              <Item.Meta>
                <span>AT ERB 315</span>
              </Item.Meta>
              <Item.Description>{paragraph}</Item.Description>
              <Item.Extra>
                <Button primary floated="right">
                  RSVP
                  <Icon name="right chevron" />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
            <Item.Content
              style={{ alignSelf: 'center', textAlign: 'center', fontSize: 'xx-large', paddingRight: '2vw' }}
            >
              <Item.Header>11</Item.Header>
              <Item.Description>October</Item.Description>
            </Item.Content>
            <Item.Content>
              <Item.Header>Meeting Topic is ABC</Item.Header>
              <Item.Meta>
                <span>AT ERB 315</span>
              </Item.Meta>
              <Item.Description>{paragraph}</Item.Description>
              <Item.Extra>
                <Button primary floated="right">
                  RSVP
                  <Icon name="right chevron" />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
            <Item.Content
              style={{ alignSelf: 'center', textAlign: 'center', fontSize: 'xx-large', paddingRight: '2vw' }}
            >
              <Item.Header>11</Item.Header>
              <Item.Description>October</Item.Description>
            </Item.Content>
            <Item.Content>
              <Item.Header>Meeting Topic is ABC</Item.Header>
              <Item.Meta>
                <span>AT ERB 315</span>
              </Item.Meta>
              <Item.Description>{paragraph}</Item.Description>
              <Item.Extra>
                <Button primary floated="right">
                  RSVP
                  <Icon name="right chevron" />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    )
  }
}
