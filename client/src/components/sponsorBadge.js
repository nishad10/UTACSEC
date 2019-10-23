import React from 'react'
import { Image } from 'semantic-ui-react'

const SponsorBadge = () => {
  return (
    <a href="https://www.privateinternetaccess.com/" target="_blank" rel="noopener noreferrer">
      <div
        style={{
          border: '0.1vw solid #828282',
          background: '#3c3c3c',
          padding: '0.5vw',
          marginTop: '1vw'
        }}
      >
        <div style={{ fontWeight: 'bold', color: 'white' }}>Sponsored By :-</div>
        <Image
          as="a"
          href="https://www.privateinternetaccess.com/"
          target="_blank"
          fluid
          src="/statics/pia-logo-white.png"
        />
      </div>
    </a>
  )
}
export default SponsorBadge
