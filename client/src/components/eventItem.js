import React, { useState, useEffect } from 'react'
import { Item, Segment } from 'semantic-ui-react'
import ticketEnableDisable from '../functions/ticketEnableDisable'
import SponsorBadge from './sponsorBadge'
import imgOrIcon from './imgOrIcon'
const EventItem = ({ date, month, day, time, location, title, description, announcement, sponsor, val, eventName }) => {
  console.log(date, month, day)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowSizeChange)
  }, [])

  return (
    <Segment inverted style={{ border: '0.2vw solid #535353' }}>
      <Item style={{ display: 'flex' }}>
        <Item.Content
          style={{
            textAlign: 'center',
            fontSize: '3vw',
            lineHeight: '4vw',
            paddingRight: '3vw'
          }}
        >
          <div style={{ alignSelf: 'center', paddingTop: '5.5vw', paddingBottom: '3vw', width: '17vw' }}>
            <Item.Header style={{ fontSize: '4vw' }}>{date}</Item.Header>
            <Item.Description style={{ fontSize: '2vw' }}>{month}</Item.Description>
            <Item.Description style={{ color: '#3cba45', fontSize: '2vw', lineHeight: '3vw' }}>
              <div>{day}</div>
              <div>{time}</div>
              <div>{location}</div>
              {sponsor ? <SponsorBadge /> : <div />}
            </Item.Description>
          </div>
        </Item.Content>

        <Item.Content
          style={{ maxWidth: '700px', fontSize: width > 1200 ? '25px' : '2vw', lineHeight: '3vw', paddingTop: '1vw' }}
        >
          <div
            style={{
              display: 'flex',
              textAlign: 'center',
              color: 'white',
              fontSize: '3vw',
              paddingRight: '5vw',
              paddingBottom: '1.5vw'
            }}
          >
            {' '}
            {imgOrIcon(val)}
            <div style={{ fontSize: '2.7vw', paddingTop: '0.5vw' }}>{title}</div>
          </div>

          <div style={{ paddingBottom: '10px', marginBottom: '1vw' }}>{description} </div>
          <div style={{ textDecoration: 'underline', marginBottom: '1.5vw' }}>{announcement} </div>
          {ticketEnableDisable(true, eventName)}
        </Item.Content>
      </Item>
    </Segment>
  )
}
export default EventItem
