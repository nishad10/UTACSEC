import React, { useState, useEffect } from 'react';
import { Grid, Divider, Header } from 'semantic-ui-react';
import OfficerItem from '../../components/officerItem';
import OfficerItemMobile from '../../components/officerItemMobile';
const Officers = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowSizeChange);
  }, []);

  const mobile = width < 600;
  return mobile ? (
    <div>
      <Divider horizontal inverted style={{ margin: '5vw 15vw ' }}>
        <Header
          as="h4"
          content="Faculty"
          style={{ color: 'rgb(158, 158, 158)', fontSize: '4vw' }}
        />
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
        <Header
          as="h4"
          content="Students"
          style={{ color: 'rgb(158, 158, 158)', fontSize: '4vw' }}
        />
      </Divider>
      <OfficerItemMobile
        name={'Erika Leal'}
        position={'Co-President'}
        email={'erika.leal@mavs.uta.edu'}
        description={
          'Hi there, I’m Co-president of CSEC and a PhD candidate. Computer Science is my passion, it has opened so many doors and avenues which have ultimately led me to cyber security.  My goal as president is to make cyber security fun and accessible to students while inspiring new white hats to fight cybercrime.'
        }
        imgSource={'/statics/erika.jpg'}
      />
      <OfficerItemMobile
        name={'Mario Oliveros'}
        position={'Co-President'}
        email={'mario.oliveros@mavs.uta.edu'}
        description={
          'I am Mario, and I am the co-president for the Cybersecurity Club. I will be organizing and running our activities and events, recruiting, and taking care of other aspects of the club. This is my first year at UTA as a transfer student in Computer Science. Before this, i received an Associates in Business (IT concentration). I have some knowledge in cybersecurity, mostly focusing on social engineering, hardware, and OPSEC.'
        }
        imgSource={'/statics/mario.jpg'}
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
        name={'Maria Tapia'}
        position={'Secretary'}
        email={'maria.tapia2@mavs.uta.edu'}
        description={
          "Hey there! My name is Maria Tapia, a sophomore information systems major at UTA. I'm still navigating where specifically to go in cyber security. I know for certain that I want to help people make educated choices and work with various people across companies. Although I'm naturally intorverted, I love getting to know and understand people. In the mean time, I want to help others find their place in security. As the team secretary, please feel free to ask questions about anything. Thanks for stopping by. Have a nice day!"
        }
        imgSource={'/statics/maria.jpg'}
      />
      <OfficerItemMobile
        name={'Ethan Belanger'}
        position={'Webmaster'}
        email={'ethan.belanger@mavs.uta.edu'}
        description={
          "I'm Ethan, and I am the Webmaster for the Cybersecurity Club. I will be working to update and maintain the website for our org. This is my first year at UTA going for a BS in Computer Science. I have some knowledge in cybersecurity, and focus mostly on Pentesting (physical and digital), Network Architecture and Design, and Lockpicking/Smithing. I also head up the Capture the Flag Committee. I have interests in just about everything, so don't be surprised to see me running the dancefloor as a DJ."
        }
        imgSource={'/statics/ethan.jpg'}
      />
      <OfficerItemMobile
        name={'Diego Vester'}
        position={'Communications'}
        email={'diego.guerrerovester@mavs.uta.edu'}
        description={
          'Hello there. I’m Diego, a Junior computer science student at UTA and the Communications officer for CSEC. I perform research in the Heraclei Lab as well as act as the social media specialist for the CSE UTA department. During my last internship with Alienware, I developed universal windows platform applications. I have interests in computer science and business and will be obtaining my minor in business this semester.'
        }
        imgSource={'/statics/diego.JPG'}
      />
      <OfficerItemMobile
        name={'Steph Nguyen'}
        position={'Treasurer'}
        email={'stephanie.nguyen3@mavs.uta.edu'}
        description={
          'Hello! My name is Stephanie and I am the treasurer for the Cybersecurity Club at UTA. I am studying to get my bachelors of Computer Science; some of my interests include software engineering, cyber security/privacy, etc. As treasurer, I will be responsible for managing the club budget/fund, as well as keeping detailed records of all financial transactions of CSEC.'
        }
        imgSource={'/statics/favicon.ico'}
      />
      <OfficerItemMobile
        name={'Alexis Spano'}
        position={'Design'}
        email={'alexis.spano@mavs.uta.edu'}
        description={
          "Hi, I'm Alexis and I am in charge of all the sweet designs you see like the posters or our logo! I am a Linguistics majors, but I studied graphic design for over 3 years before changing my major. I am not knowledgeable at all in cyber security other than what I've picked up here and there in the club."
        }
        imgSource={'/statics/alexis.jpg'}
      />
    </div>
  ) : (
    <div>
      <Divider horizontal inverted style={{ margin: '5vw 15vw ' }}>
        <Header
          as="h4"
          content="Faculty"
          style={{ color: 'rgb(158, 158, 158)', fontSize: '2vw' }}
        />
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
          <Header
            as="h4"
            content="Students"
            style={{ color: 'rgb(158, 158, 158)', fontSize: '2vw' }}
          />
        </Divider>

        <OfficerItem
          name={'Erika Leal'}
          position={'Co-President'}
          email={'erika.leal@mavs.uta.edu'}
          description={
            'Hi there, I’m Co-president of CSEC and a PhD candidate. Computer Science is my passion, it has opened so many doors and avenues which have ultimately led me to cyber security.  My goal as president is to make cyber security fun and accessible to students while inspiring new white hats to fight cybercrime.'
          }
          imgSource={'/statics/erika.jpg'}
        />
        <Divider inverted style={{ margin: '1vw 15vw' }} />

        <OfficerItem
          name={'Mario Oliveros'}
          position={'Co-President'}
          email={'mario.oliveros@mavs.uta.edu'}
          description={
            'I am Mario, and I am the co-president for the Cybersecurity Club. I will be organizing and running our activities and events, recruiting, and taking care of other aspects of the club. This is my first year at UTA as a transfer student in Computer Science. Before this, i received an Associates in Business (IT concentration). I have some knowledge in cybersecurity, mostly focusing on social engineering, hardware, and OPSEC.'
          }
          imgSource={'/statics/mario.jpg'}
        />
        <Divider inverted style={{ margin: '1vw 15vw 1vw 15vw' }} />

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
          name={'Maria Tapia'}
          position={'Secretary'}
          email={'maria.tapia2@mavs.uta.edu'}
          description={
            "Hey there! My name is Maria Tapia, a sophomore information systems major at UTA. I'm still navigating where specifically to go in cyber security. I know for certain that I want to help people make educated choices and work with various people across companies. Although I'm naturally intorverted, I love getting to know and understand people. In the mean time, I want to help others find their place in security. As the team secretary, please feel free to ask questions about anything. Thanks for stopping by. Have a nice day!"
          }
          imgSource={'/statics/maria.jpg'}
        />
        <Divider inverted style={{ margin: '1vw 15vw 1vw 15vw' }} />

        <OfficerItem
          name={'Ethan Belanger'}
          position={'Webmaster'}
          email={'ethan.belanger@mavs.uta.edu'}
          description={
            "I'm Ethan, and I am the Webmaster for the Cybersecurity Club. I will be working to update and maintain the website for our org. This is my first year at UTA going for a BS in Computer Science. I have some knowledge in cybersecurity, and focus mostly on Pentesting (physical and digital), Network Architecture and Design, and Lockpicking/Smithing. I also head up the Capture the Flag Committee. I have interests in just about everything, so don't be surprised to see me running the dancefloor as a DJ."
          }
          imgSource={'/statics/ethan.jpg'}
        />
        <Divider inverted style={{ margin: '1vw 15vw 1vw 15vw' }} />

        <OfficerItem
          name={'Diego Vester'}
          position={'Communications'}
          email={'diego.guerrerovester@mavs.uta.edu'}
          description={
            'Hello there. I’m Diego, a Junior computer science student at UTA and the Communications officer for CSEC. I perform research in the Heraclei Lab as well as act as the social media specialist for the CSE UTA department. During my last internship with Alienware, I developed universal windows platform applications. I have interests in computer science and business and will be obtaining my minor in business this semester.'
          }
          imgSource={'/statics/diego.JPG'}
        />
        <Divider inverted style={{ margin: '1vw 15vw 1vw 15vw' }} />

        <OfficerItem
          name={'Steph Nguyen'}
          position={'Treasurer'}
          email={'stephanie.nguyen3@mavs.uta.edu'}
          description={
            'Hello! My name is Stephanie and I am the treasurer for the Cybersecurity Club at UTA. I am studying to get my bachelors of Computer Science; some of my interests include software engineering, cyber security/privacy, etc. As treasurer, I will be responsible for managing the club budget/fund, as well as keeping detailed records of all financial transactions of CSEC.'
          }
          imgSource={'/statics/favicon.ico'}
        />
        <Divider inverted style={{ margin: '1vw 15vw 1vw 15vw' }} />

        <OfficerItem
          name={'Alexis Spano'}
          position={'Design'}
          email={'alexis.spano@mavs.uta.edu'}
          description={
            "Hi, I'm Alexis and I am in charge of all the sweet designs you see like the posters or our logo! I am a Linguistics majors, but I studied graphic design for over 3 years before changing my major. I am not knowledgeable at all in cyber security other than what I've picked up here and there in the club."
          }
          imgSource={'/statics/alexis.jpg'}
        />
      </Grid>
    </div>
  );
};
export default Officers;
