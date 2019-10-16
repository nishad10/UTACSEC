import React, { Component } from 'react'
import Iframe from 'react-iframe'

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
    )
  }
}

export { Discord, getTotalMembers }
