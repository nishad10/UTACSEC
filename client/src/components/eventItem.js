import React,{useEffect} from 'react'
import ticketEnableDisable from '../functions/ticketEnableDisable'
import SponsorBadge from './sponsorBadge'
import eventBrite from '../components/eventBrite'
import {Item} from 'semantic-ui-react'
const Eventitem = ({
  date,
  month,
  time,
  location,
  title,
  description,
  sponsor,
  eventName,
  ticketID,
  mobile,
  ticketStatus
}) => {
  useEffect(() => {
    eventBrite(ticketID, eventName)
  },[])
  return  (
    <div style={{ alignSelf: 'center', fontSize: '20px', lineHeight: '1.375em' }}>
      <div style={{ display: 'flex' }}>
        <div
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
              <div>{time}</div>
              <div>{location}</div>
              {sponsor ? <SponsorBadge /> : <div />}
            </Item.Description>
          </div>
     
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
      
            <div style={{ fontSize: '2.7vw', paddingTop: '0.5vw' }}>{title}</div>
          </div>

      <div style={{ alignSelf: 'center', fontSize: '20px', lineHeight: '1.375em' }}>
        <div style={{ color: '#DE6E4B', fontSize: '25px', fontWeight: 'bold', paddingBottom: '10px' }}>{title}</div>
        <div>{description}</div>
        <div style={{ color: '#5BC0BE', display: 'flex', paddingTop: '10px' }}>
          At {location === undefined ? 'Not Decided Yet' : `${location}`}
          <div style={{ color: '#5BC0BE', whiteSpace: 'pre', fontSize: '20px' }}> from {time}</div>
        </div>
        {ticketEnableDisable(ticketStatus, eventName, mobile)}
      </div>
    </div>
    </div>
    </div>
  )}
export default Eventitem
