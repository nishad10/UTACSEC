import React, { Component } from 'react'
import { Card, Image, Icon, Grid, Segment, Divider } from 'semantic-ui-react'
import OfficerItem from '../../components/officerItem'

class Officers extends Component {
  render() {
    return (
      <div>
        <Grid style={{ fontSize: '1.5vw', backgroundColor: 'black', lineHeight: '3vw' }}>
          <OfficerItem
            name={'Jiang Ming'}
            position={'Faculty Advisor'}
            email={'jiang.ming@uta.edu'}
            description={
              ' Hey I am Zehra and I am a Senior at UTA. I have been a part of this club since my Freshmen Year. I am the president so I pretty much overlook all aspects of the club. I am C|EH certified and am working towards other certifications as well. I love Pen testing in my free time. I am always utilizing my skills by learning tools, reading books, and doing labs.'
            }
            imgSource={'/statics/jiang.jpg'}
          />
          <Divider inverted style={{ margin: '1vw 15vw 1vw 15vw' }} />
          <OfficerItem
            name={'Zehra Jafri'}
            position={'President'}
            email={'zehra.jafri@mavs.uta.edu'}
            description={
              ' I am an Assistant Professor in the Computer Science and Engineering Department at UT Arlington. My research interests span cybersecurity and software engineering, with a focus on software security and malware analysis. I am endeavoring to develop novel binary code analysis techniques to help people find software vulnerabilities and defeat malicious software.'
            }
            imgSource={'/statics/zehra.jpg'}
          />
          <Divider inverted style={{ margin: '1vw 15vw 1vw 15vw' }} />
          <OfficerItem
            name={'Nishad Aherrao'}
            position={'Vice President'}
            email={'nishad.aherrao@mavs.uta.edu'}
            description={
              ' Hey I am Nishad I am a Senior Undergraduate here at UTA and an International Student. I am doing my bachelors in Computer Science. I have been interested in security from quite a while. I like doing CTF on hackthebox and SEIM(Security Event and Incident Management) in terms of security. I havent really thought about security as a career path as I also like Software Development so I take security more as a hobby.'
            }
            imgSource={'/statics/nishad.jpg'}
          />
          <Divider inverted style={{ margin: '1vw 15vw 1vw 15vw' }} />
          <OfficerItem
            name={'Mario Oliveros'}
            position={'Communications and Social Media'}
            email={'mario.oliveros@mavs.uta.edu'}
            description={
              'I am Mario, and I am the Social and Activities Chair for the Cybersecurity Club. I am in charge of organizing and running our activities and events, recruiting, and other social aspects of the club. This is my first year at UTA as a transfer student in Computer Science. Before this, i received an Associates in Business (IT concentration). I have some knowledge in cybersecurity, mostly focusing on social engineering, hardware, and OPSEC.'
            }
            imgSource={'/statics/mario.jpg'}
          />
          <Divider inverted style={{ margin: '1vw 15vw 1vw 15vw' }} />
          <OfficerItem
            name={'Erika Leal'}
            position={'Treasurer'}
            email={'erika.leal@mavs.uta.edu'}
            description={
              'Hey I am Erika and I am the treasurer for the club. I handle all the funds to keep this club moving. I am a PhD student for Dr. Ming with my research focused on packed malware right now. I also did my undergraduate in computer science.'
            }
            imgSource={'/statics/favicon.ico'}
          />
        </Grid>
      </div>
    )
  }
}
export default Officers
