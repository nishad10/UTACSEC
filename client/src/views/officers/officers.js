import React, { useState, useEffect } from 'react'
import { Grid, Divider, Header } from 'semantic-ui-react'
import OfficerItem from '../../components/officerItem'
import OfficerItemMobile from '../../components/officerItemMobile'
const Officers = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowSizeChange)
  }, [])

  const mobile = width < 600
  return mobile ? (
    <div>
      <Divider horizontal inverted style={{ margin: '5vw 15vw ' }}>
        <Header as="h4" content="Faculty" style={{ color: 'rgb(158, 158, 158)', fontSize: '4vw' }} />
      </Divider>
      <OfficerItemMobile
        name={'Jiang Ming'}
        position={'Faculty Advisor'}
        email={'jiang.ming@uta.edu'}
        description={
          ' I am an Assistant Professor in the Computer Science and Engineering Department at UT Arlington. My research interests span cybersecurity and software engineering, with a focus on software security and malware analysis. I am endeavoring to develop novel binary code analysis techniques to help people find software vulnerabilities and defeat malicious software.'
        }
        imgSource={'/statics/jiang.jpg'}
      />

      <Divider horizontal inverted style={{ margin: '5vw 15vw ' }}>
        <Header as="h4" content="Students" style={{ color: 'rgb(158, 158, 158)', fontSize: '4vw' }} />
      </Divider>

      <OfficerItemMobile
        name={'Zehra Jafri'}
        position={'President'}
        email={'zehra.jafri@mavs.uta.edu'}
        description={
          ' Hey I am Zehra and I am a Senior at UTA. I have been a part of this club since my Freshmen Year. I am the president so I pretty much overlook all aspects of the club. I am C|EH certified and am working towards other certifications as well. I love Pen testing in my free time. I am always utilizing my skills by learning tools, reading books, and doing labs.'
        }
        imgSource={'/statics/zehra.jpg'}
      />

      <OfficerItemMobile
        name={'Nishad Aherrao'}
        position={'Vice President'}
        email={'nishad.aherrao@mavs.uta.edu'}
        description={
          ' Hey I am Nishad I am a Senior here at UTA and an International Student. I am doing my bachelors in Computer Science. In terms of security I used to do CTF on hackthebox and sometimes do SEIM(Security Event and Incident Management) stuff. I havent really taken security as seriosuly because I love coding in general so I like Full-Stack Web Development as well as other Software Development in general and take Security more as a hobby.'
        }
        imgSource={'/statics/nishad.jpg'}
      />

      <OfficerItemMobile
        name={'Mario Oliveros'}
        position={'Communications and Social Media'}
        email={'mario.oliveros@mavs.uta.edu'}
        description={
          'I am Mario, and I am the Social and Activities Chair for the Cybersecurity Club. I am in charge of organizing and running our activities and events, recruiting, and other social aspects of the club. This is my first year at UTA as a transfer student in Computer Science. Before this, i received an Associates in Business (IT concentration). I have some knowledge in cybersecurity, mostly focusing on social engineering, hardware, and OPSEC.'
        }
        imgSource={'/statics/mario.jpg'}
      />

      <OfficerItemMobile
        name={'Erika Leal'}
        position={'Treasurer'}
        email={'erika.leal@mavs.uta.edu'}
        description={
          'Hey I am Erika and I am the treasurer for the club. I handle all the funds to keep this club moving. I am a PhD student for Dr. Ming with my research focused on packed malware right now. I also did my undergraduate in computer science.'
        }
        imgSource={'/statics/favicon.ico'}
      />
    </div>
  ) : (
    <div>
      <Divider horizontal inverted style={{ margin: '5vw 15vw ' }}>
        <Header as="h4" content="Faculty" style={{ color: 'rgb(158, 158, 158)', fontSize: '2vw' }} />
      </Divider>
      <Grid style={{ lineHeight: '2em' }}>
        <OfficerItem
          name={'Jiang Ming'}
          position={'Faculty Advisor'}
          email={'jiang.ming@uta.edu'}
          description={
            ' I am an Assistant Professor in the Computer Science and Engineering Department at UT Arlington. My research interests span cybersecurity and software engineering, with a focus on software security and malware analysis. I am endeavoring to develop novel binary code analysis techniques to help people find software vulnerabilities and defeat malicious software.'
          }
          imgSource={'/statics/jiang.jpg'}
        />
        <Divider horizontal inverted style={{ margin: '5vw 15vw ' }}>
          <Header as="h4" content="Students" style={{ color: 'rgb(158, 158, 158)', fontSize: '2vw' }} />
        </Divider>

        <OfficerItem
          name={'Zehra Jafri'}
          position={'President'}
          email={'zehra.jafri@mavs.uta.edu'}
          description={
            ' Hey I am Zehra and I am a Senior at UTA. I have been a part of this club since my Freshmen Year. I am the president so I pretty much overlook all aspects of the club. I am C|EH certified and am working towards other certifications as well. I love Pen testing in my free time. I am always utilizing my skills by learning tools, reading books, and doing labs.'
          }
          imgSource={'/statics/zehra.jpg'}
        />
        <Divider inverted style={{ margin: '1vw 15vw' }} />
        <OfficerItem
          name={'Nishad Aherrao'}
          position={'Vice President'}
          email={'nishad.aherrao@mavs.uta.edu'}
          description={
            ' Hey I am Nishad I am a Senior here at UTA and an International Student. I am doing my bachelors in Computer Science. In terms of security I used to do CTF on hackthebox and sometimes do SEIM(Security Event and Incident Management) stuff. I havent really taken security as seriosuly because I love coding in general so I like Full-Stack Web Development as well as other Software Development in general and take Security more as a hobby.'
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
        <Divider inverted style={{ margin: '1vw 15vw' }} />
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
export default Officers
