import React, { Component } from 'react'
import { Card, Image, Icon, Grid, Segment, Divider } from 'semantic-ui-react'

class Officers extends Component {
  render() {
    return (
      <div>
        <Grid style={{ fontSize: '1.5vw', backgroundColor: 'black', lineHeight: '2vw' }}>
          <Grid.Row style={{ padding: '2vw', display: 'flex' }}>
            <div style={{ display: 'flex', width: '100%' }}>
              <Segment inverted textAlign="left" style={{ fontSize: '2vw', display: 'flex', width: '100%' }}>
                <div style={{ width: '15vw', fontSize: '1vw' }}>
                  <Card>
                    <Image src="/statics/jiang.jpg" wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>Jiang Ming</Card.Header>
                      <Card.Meta style={{ paddingTop: '5px' }}>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>Faculty Advisor</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="mail" />
                        jiang.ming@uta.edu
                      </a>
                    </Card.Content>
                  </Card>
                </div>
                <div style={{ alignSelf: 'center', margin: '5vw', paddingBottom: '5vw' }}>
                  I am an Assistant Professor in the Computer Science and Engineering Department at UT Arlington. My
                  research interests span cybersecurity and software engineering, with a focus on software security and
                  malware analysis. I am endeavoring to develop novel binary code analysis techniques to help people
                  find software vulnerabilities and defeat malicious software.
                </div>
              </Segment>
            </div>
          </Grid.Row>
          <Divider inverted />
          <Grid.Row style={{ padding: '2vw', display: 'flex' }}>
            <div style={{ display: 'flex', width: '100%' }}>
              <Segment inverted textAlign="left" style={{ fontSize: '2vw', display: 'flex', width: '100%' }}>
                <div style={{ width: '15vw', fontSize: '1vw' }}>
                  <Card>
                    <Image src="/statics/zehra.jpg" wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>Zehra Jafri</Card.Header>
                      <Card.Meta style={{ paddingTop: '5px' }}>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>President</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="mail" />
                        zehra.jafri@mavs.uta.edu
                      </a>
                    </Card.Content>
                  </Card>
                </div>
                <div style={{ alignSelf: 'center', margin: '5vw', paddingBottom: '5vw' }}>I am Zehra.</div>
              </Segment>
            </div>
          </Grid.Row>
          <Divider inverted />
          <Grid.Row style={{ padding: '2vw', display: 'flex' }}>
            <div style={{ display: 'flex', width: '100%' }}>
              <Segment inverted textAlign="left" style={{ fontSize: '2vw', display: 'flex', width: '100%' }}>
                <div style={{ width: '15vw', fontSize: '1vw' }}>
                  <Card>
                    <Image src="/statics/nishad.jpg" wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>Nishad Aherrao</Card.Header>
                      <Card.Meta style={{ paddingTop: '5px' }}>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>Vice President</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="mail" />
                        nishad.aherrao@mavs.uta.edu
                      </a>
                    </Card.Content>
                  </Card>
                </div>
                <div style={{ alignSelf: 'center', margin: '5vw', paddingBottom: '5vw' }}>I am Nishad.</div>
              </Segment>
            </div>
          </Grid.Row>
          <Divider inverted />
          <Grid.Row style={{ padding: '2vw', display: 'flex' }}>
            <div style={{ display: 'flex', width: '100%' }}>
              <Segment inverted textAlign="left" style={{ fontSize: '2vw', display: 'flex', width: '100%' }}>
                <div style={{ width: '15vw', fontSize: '1vw' }}>
                  <Card>
                    <Image src="/statics/mario.jpg" wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>Mario</Card.Header>
                      <Card.Meta style={{ paddingTop: '5px' }}>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>Social Media</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="mail" />
                        xyz@xyz
                      </a>
                    </Card.Content>
                  </Card>
                </div>
                <div style={{ alignSelf: 'center', margin: '5vw', paddingBottom: '5vw' }}>I am Mario.</div>
              </Segment>
            </div>
          </Grid.Row>
          <Divider inverted />
        </Grid>
      </div>
    )
  }
}
export default Officers
