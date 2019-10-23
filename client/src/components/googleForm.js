import React, { Component } from 'react'

class GoogleForm extends Component {
  componentDidMount() {}
  render() {
    return (
      <iframe
        id="googleForm"
        src="https://docs.google.com/forms/d/e/1FAIpQLSejy06lsYjchT5N34ImgAPdWw9CpmS0hrJ9R2tUbrVk-JCyHA/viewform?embedded=true"
        frameBorder="0"
        width="100%"
        height="100%"
      >
        Loading…
      </iframe>
    )
  }
}

export default GoogleForm
