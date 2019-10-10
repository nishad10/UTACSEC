import React, { Component } from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
const paragraph = <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
export default class Events extends Component {
  render() {
    return (
      <div>
        <Item.Group divided relaxed style={{ display: 'grid', justifyContent: 'center', paddingTop: '50px' }}>
          <Item>
            <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />

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

          <Item>
            <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />

            <Item.Content>
              <Item.Header>Meeting Topic is DEF</Item.Header>
              <Item.Meta>
                <span>AT ERB 315</span>
              </Item.Meta>
              <Item.Description>{paragraph}</Item.Description>
              <Item.Extra>
                <Button primary floated="right">
                  RSVP
                  <Icon name="right chevron" />
                </Button>
                <Label>Speaker at Event</Label>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />

            <Item.Content>
              <Item.Header>Meeting Topic is XYZ</Item.Header>
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
