import React from 'react'
import { Image } from 'semantic-ui-react'

const SponsorBadge = () => {
  return (
    <a href="https://www.privateinternetaccess.com/" target="_blank" rel="noopener noreferrer">
      <div
        style={{
          background: '#121212',
          padding: '0.5vw',
          marginTop: '1vw'
        }}
      >
        <div style={{ fontWeight: 'bold', color: '#DE6E4B' }}>Sponsored By :-</div>
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
