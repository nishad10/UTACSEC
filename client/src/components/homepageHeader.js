import React from 'react';
import { Button, Icon, Header, Container, Image } from 'semantic-ui-react';

const HomepageHeader = (props) => {
  const { mobile } = props;

  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: mobile ? '' : 'center',
            marginTop: mobile ? '1em' : '2.5em',
          }}
        >
          <Image
            size="tiny"
            src="/statics/favicon.ico"
            style={{ alignSelf: 'center', paddingRight: '10px' }}
          />
          <Header
            as="h1"
            content="Cyber Security Club"
            inverted
            className="textName"
            style={{
              alignSelf: 'center',
              fontSize: mobile ? '2.5em' : '3.5em',
              fontWeight: 'normal',
              marginTop: mobile ? '0.5em' : '1.5em',
              marginBottom: mobile ? '0.5em' : '1.5em',
            }}
          />
        </div>
        <Header
          as="h1"
          content="@ UTA"
          inverted
          style={{
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: mobile ? '1.5em' : '3em',
            fontWeight: 'normal',
            marginBottom: mobile ? '1em' : '1.5em',
          }}
        />
        <div style={{ marginBottom: '4em', textAlign: 'center' }}>
          <a
            style={{ color: '#21ba45' }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSejy06lsYjchT5N34ImgAPdWw9CpmS0hrJ9R2tUbrVk-JCyHA/viewform?usp=sf_link"
          >
            <Button
              animated
              basic
              color="green"
              style={{
                fontSize: mobile ? '1em' : '1.5em',
                fontWeight: 'normal',
              }}
            >
              <Button.Content visible> Join Now</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default HomepageHeader;
