import React, { Component } from 'react'
import Iframe from 'react-iframe'
import { Grid } from 'semantic-ui-react'
const showDiscord = width => {
  const isMobile = width <= 500
  if (isMobile) {
    return
  } else
    return (
      <Grid.Column floated="left" style={{ maxWidth: '27vw', maxHeight: '80vw', minWidth: '200px' }}>
        <Discord />
      </Grid.Column>
    )
}
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

export default showDiscord
