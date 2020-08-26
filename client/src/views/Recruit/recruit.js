import React, { useEffect, useState } from 'react';
import { Header, Segment, List, Button, Icon } from 'semantic-ui-react';

// Keeping this component for future recruiting opportunities for new officers.
const Recruit = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowSizeChange);
  }, []);
  const mobile = width < 600;
  return (
    <div
      style={
        mobile
          ? {}
          : {
              display: 'grid',
              gridTemplateColumns: '40% 40%',
              paddingTop: '50px',
              justifyContent: 'space-evenly',
            }
      }
    >
      <Segment
        inverted
        style={{
          width: '100%',
          margin: mobile ? '20px 0px' : '0',
        }}
      >
        <div>
          <Header
            as="h3"
            style={{ fontSize: '25px', color: '#de6e4b' }}
            inverted
            textAlign="center"
          >
            Secretary
          </Header>
        </div>

        <Segment inverted style={{ fontSize: mobile ? '14px' : '20px' }}>
          <List bulleted relaxed>
            <List.Item>
              Have interest and knowledge of cybersecurity and related topics.{' '}
            </List.Item>
            <List.Item>
              Be able to hold a meeting as the main speaker if need arises.{' '}
            </List.Item>
            <List.Item>
              Assist the President and other officers with record keeping.
            </List.Item>
            <List.Item>Keep a track of all meetings and attendance.</List.Item>
            <List.Item>
              Help with social media accounts and public relation
              communications.
            </List.Item>
            <List.Item>
              Help other officers with arranging weekly meetings{' '}
            </List.Item>
            <List.Item>
              Records and other documents should be managed on google drive.
            </List.Item>
          </List>
        </Segment>
        <a
          style={{ color: 'black' }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSc2wMD5oWLsw9n-r3lbj6He2oKOWDMMYFMQydk8kmQhcD3L5A/viewform?usp=sf_link"
        >
          <Button
            style={{
              fontSize: mobile ? '3.2vw' : '1vw',
              float: mobile ? '' : 'right',
              background: '#DE6E4B',
            }}
          >
            Apply
            <Icon name="right chevron" />
          </Button>
        </a>
      </Segment>
      <Segment
        inverted
        style={{
          width: '100%',
          margin: mobile ? '20px 0px' : '0',
        }}
      >
        <Header
          as="h3"
          style={{ fontSize: '25px', color: '#de6e4b' }}
          inverted
          textAlign="center"
        >
          Treasurer
        </Header>

        <Segment inverted style={{ fontSize: mobile ? '14px' : '20px' }}>
          <List bulleted relaxed>
            <List.Item>
              Have interest and knowledge of cybersecurity and related topics.{' '}
            </List.Item>
            <List.Item>
              Be able to hold a meeting as the main speaker if need arises.{' '}
            </List.Item>
            <List.Item>
              Keep a budget for the semester and submit a profit/loss statement
              to the university at the end of semester and keep all information
              for it through the semester.
            </List.Item>
            <List.Item>
              Advise the officers on spending and make sure the club runs
              smoothly.
            </List.Item>
            <List.Item>
              Look to raise money through sponsors of different types.
            </List.Item>
            <List.Item>Help with tax documents if need arises.</List.Item>
            <List.Item>
              Help with paid membership management for the club.
            </List.Item>
          </List>
        </Segment>
        <a
          style={{ color: 'black' }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSc2wMD5oWLsw9n-r3lbj6He2oKOWDMMYFMQydk8kmQhcD3L5A/viewform?usp=sf_link"
        >
          <Button
            style={{
              fontSize: mobile ? '3.2vw' : '1vw',
              float: mobile ? '' : 'right',
              background: '#DE6E4B',
            }}
          >
            Apply
            <Icon name="right chevron" />
          </Button>
        </a>
      </Segment>
      <Segment
        inverted
        style={{
          width: '100%',
          margin: mobile ? '20px 0px' : '20px 0',
        }}
      >
        <div>
          <Header
            as="h3"
            style={{ fontSize: '25px', color: '#de6e4b' }}
            inverted
            textAlign="center"
          >
            IT Maintainence
          </Header>
        </div>

        <Segment inverted style={{ fontSize: mobile ? '14px' : '20px' }}>
          <List bulleted relaxed>
            <List.Item>
              Have interest and knowledge of cybersecurity and related topics.{' '}
            </List.Item>
            <List.Item>
              Be able to hold a meeting as the main speaker if need arises.{' '}
            </List.Item>
            <List.Item>
              Should have taken the Network+ or similar exam or is studying for
              one.
            </List.Item>
            <List.Item>
              Have knowledge of servers, their setup and maintainence.
            </List.Item>
            <List.Item>
              Help with manageing different types of hardware and maintaining
              them.
            </List.Item>
            <List.Item>
              Knows how to setup a FTP server specifically.{' '}
            </List.Item>
            <List.Item>Has some kind of homelab already setup.</List.Item>
          </List>
        </Segment>
        <a
          style={{ color: 'black' }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSc2wMD5oWLsw9n-r3lbj6He2oKOWDMMYFMQydk8kmQhcD3L5A/viewform?usp=sf_link"
        >
          <Button
            style={{
              fontSize: mobile ? '3.2vw' : '1vw',
              float: mobile ? '' : 'right',
              background: '#DE6E4B',
            }}
          >
            Apply
            <Icon name="right chevron" />
          </Button>
        </a>
      </Segment>
    </div>
  );
};

export default Recruit;
