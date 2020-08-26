import React, { Component } from 'react';
import Iframe from 'react-iframe';
const showDiscord = (isMobile) => {
  if (isMobile) {
    return;
  } else return <Discord />;
};
class Discord extends Component {
  componentDidMount() {}

  render() {
    return (
      <Iframe
        src="https://discordapp.com/widget?id=619607468292571137&theme=dark"
        allowTransparency="true"
        frameBorder="0"
        width="100%"
        height="100%"
      ></Iframe>
    );
  }
}

export default showDiscord;
