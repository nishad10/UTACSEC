import React from 'react'
import { Item, Segment } from 'semantic-ui-react'
import ticketEnableDisable from '../functions/ticketEnableDisable'
import SponsorBadge from './sponsorBadge'
import imgOrIcon from './imgOrIcon'
const EventItem = ({ date, month, day, time, location, title, description, announcement, sponsor, val, eventName }) => {
  console.log(date, month, day)
  return (
    <Segment inverted style={{ border: '0.15em solid #535353' }}>
      <Item style={{ display: 'flex' }}>
        <Item.Content
          style={{
            textAlign: 'center'
          }}
        >
          <div>
            <Item.Header>{date}</Item.Header>
            <Item.Description>{month}</Item.Description>
            <Item.Description style={{ color: '#3cba45' }}>
              <div>{day}</div>
              <div>{time}</div>
              <div>{location}</div>
              {sponsor ? <SponsorBadge /> : <div />}
            </Item.Description>
          </div>
        </Item.Content>

        <Item.Content>
          <div
            style={{
              display: 'flex',
              textAlign: 'center',
              color: 'white'
            }}
          >
            {' '}
            {imgOrIcon(val)}
            <div>{title}</div>
          </div>

          <div>{description} </div>
          <div style={{ textDecoration: 'underline' }}>{announcement} </div>
          {ticketEnableDisable(true, eventName)}
        </Item.Content>
      </Item>
    </Segment>
  )
}
export default EventItem
