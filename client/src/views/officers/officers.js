import React, { Component } from 'react'
import { Card, Image, Icon, Grid, Segment, Divider } from 'semantic-ui-react'

class Officers extends Component {
  render() {
    return (
      <div>
        <Grid style={{ fontSize: '1.5vw', backgroundColor: 'black', lineHeight: '3vw' }}>
          <Grid.Row style={{ padding: '7vw 7vw 1vw 7vw', display: 'flex' }}>
            <div style={{ display: 'flex', width: '100%' }}>
              <Segment inverted textAlign="left" style={{ fontSize: '2vw', display: 'flex', width: '100%' }}>
                <div style={{ width: '20vw', fontSize: '1vw' }}>
                  <Card>
                    <Image src="/statics/jiang.jpg" wrapped ui={false} />
                    <Card.Content style={{ paddingBottom: '0px' }}>
                      <Card.Header>Jiang Ming</Card.Header>

                      <Card.Description>Faculty Advisor</Card.Description>
                    </Card.Content>
                    <Card.Content extra style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                      <a>
                        <Icon name="mail" />
                        jiang.ming@uta.edu
                      </a>
                    </Card.Content>
                  </Card>
                </div>
                <div style={{ alignSelf: 'center', paddingLeft: '5vw', paddingBottom: '5vw' }}>
                  I am an Assistant Professor in the Computer Science and Engineering Department at UT Arlington. My
                  research interests span cybersecurity and software engineering, with a focus on software security and
                  malware analysis. I am endeavoring to develop novel binary code analysis techniques to help people
                  find software vulnerabilities and defeat malicious software.
                </div>
              </Segment>
            </div>
          </Grid.Row>
          <Divider inverted style={{ margin: '1vw 15vw 1vw 15vw' }} />
          <Grid.Row style={{ padding: '1vw 7vw 1vw 7vw', display: 'flex' }}>
            <div style={{ display: 'flex', width: '100%' }}>
              <Segment inverted textAlign="left" style={{ fontSize: '2vw', display: 'flex', width: '100%' }}>
                <div style={{ width: '20vw', fontSize: '1vw' }}>
                  <Card>
                    <Image src="/statics/zehra.jpg" wrapped ui={false} />
                    <Card.Content style={{ paddingBottom: '0px' }}>
                      <Card.Header>Zehra Jafri</Card.Header>

                      <Card.Description>President</Card.Description>
                    </Card.Content>
                    <Card.Content extra style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                      <a>
                        <Icon name="mail" />
                        zehra.jafri@mavs.uta.edu
                      </a>
                    </Card.Content>
                  </Card>
                </div>
                <div style={{ alignSelf: 'center', paddingLeft: '5vw', paddingBottom: '5vw' }}>
                  Hey I am Zehra and I am a Senior at UTA. I have been a part of this club since my Freshmen Year. I am
                  the president so I pretty much overlook all aspects of the club. I am C|EH certified and am working
                  towards other certifications as well. I love Pen testing in my free time. I am always utilizing my
                  skills by learning tools, reading books, and doing labs.
                </div>
              </Segment>
            </div>
          </Grid.Row>
          <Divider inverted style={{ margin: '1vw 15vw 1vw 15vw' }} />
          <Grid.Row style={{ padding: '1vw 7vw 1vw 7vw', display: 'flex' }}>
            <div style={{ display: 'flex', width: '100%' }}>
              <Segment inverted textAlign="left" style={{ fontSize: '2vw', display: 'flex', width: '100%' }}>
                <div style={{ width: '20vw', fontSize: '1vw' }}>
                  <Card>
                    <Image src="/statics/nishad.jpg" wrapped ui={false} />
                    <Card.Content style={{ paddingBottom: '0px' }}>
                      <Card.Header>Nishad Aherrao</Card.Header>

                      <Card.Description>Vice President</Card.Description>
                    </Card.Content>
                    <Card.Content extra style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                      <a>
                        <Icon name="mail" />
                        nishad.aherrao@mavs.uta.edu
                      </a>
                    </Card.Content>
                  </Card>
                </div>
                <div style={{ alignSelf: 'center', paddingLeft: '5vw', paddingBottom: '5vw' }}>
                  Hey I am Nishad I am a Senior Undergraduate here at UTA and an International Student. I am doing my
                  bachelors in Computer Science. I have been interested in security from quite a while. I like doing CTF
                  on hackthebox and SEIM(Security Event and Incident Management) in terms of security. I havent really
                  thought about security as a career path as I also like Software Development so I take security more as
                  a hobby.
                </div>
              </Segment>
            </div>
          </Grid.Row>
          <Divider inverted style={{ margin: '1vw 15vw 1vw 15vw' }} />
          <Grid.Row style={{ padding: '1vw 7vw 1vw 7vw', display: 'flex' }}>
            <div style={{ display: 'flex', width: '100%' }}>
              <Segment inverted textAlign="left" style={{ fontSize: '2vw', display: 'flex', width: '100%' }}>
                <div style={{ width: '20vw', fontSize: '1vw' }}>
                  <Card>
                    <Image src="/statics/mario.jpg" wrapped ui={false} />
                    <Card.Content style={{ paddingBottom: '0px' }}>
                      <Card.Header>Mario Oliveros</Card.Header>

                      <Card.Description>Communications and Social Media</Card.Description>
                    </Card.Content>
                    <Card.Content extra style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                      <a>
                        <Icon name="mail" />
                        mario.oliveros@mavs.uta.edu
                      </a>
                    </Card.Content>
                  </Card>
                </div>
                <div style={{ alignSelf: 'center', paddingLeft: '5vw', paddingBottom: '5vw' }}>
                  I am Mario, and I am the Social and Activities Chair for the Cybersecurity Club. I am in charge of
                  organizing and running our activities and events, recruiting, and other social aspects of the club.
                  This is my first year at UTA as a transfer student in Computer Science. Before this, i received an
                  Associates in Business (IT concentration). I have some knowledge in cybersecurity, mostly focusing on
                  social engineering, hardware, and OPSEC.
                </div>
              </Segment>
            </div>
          </Grid.Row>
          <Divider inverted style={{ margin: '1vw 15vw 1vw 15vw' }} />
          <Grid.Row style={{ padding: '1vw 7vw 1vw 7vw', display: 'flex' }}>
            <div style={{ display: 'flex', width: '100%' }}>
              <Segment inverted textAlign="left" style={{ fontSize: '2vw', display: 'flex', width: '100%' }}>
                <div style={{ width: '20vw', fontSize: '1vw' }}>
                  <Card>
                    <Image src="/statics/favicon.ico" wrapped ui={false} />
                    <Card.Content style={{ paddingBottom: '0px' }}>
                      <Card.Header>Erika Leal</Card.Header>

                      <Card.Description>Treasurer</Card.Description>
                    </Card.Content>
                    <Card.Content extra style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                      <a>
                        <Icon name="mail" />
                        erika.leal@mavs.uta.edu
                      </a>
                    </Card.Content>
                  </Card>
                </div>
                <div style={{ alignSelf: 'center', paddingLeft: '5vw', paddingBottom: '5vw' }}>
                  Hey I am Erika and I am the treasurer for the club. I handle all the funds to keep this club moving. I
                  am a PhD student for Dr. Ming with my research focused on packed malware right now. I also did my
                  undergraduate in computer science.
                </div>
              </Segment>
            </div>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
export default Officers
