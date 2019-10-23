import React from 'react'
import { Image, Icon } from 'semantic-ui-react'

const imgOrIcon = val => {
  if (val == 'image') {
    return (
      <div style={{ width: '4vw', height: '3vw', marginRight: '2vw' }}>
        <Image fluid src="/statics/pumpkin.png" />
      </div>
    )
  } else if (val === 'icon') {
    return <Icon style={{ paddingTop: '0.5vw' }} name="calendar alternate outline" />
  }
}
export default imgOrIcon
