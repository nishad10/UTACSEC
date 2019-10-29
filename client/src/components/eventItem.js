import React from 'react'
import ticketEnableDisable from '../functions/ticketEnableDisable'
import SponsorBadge from './sponsorBadge'

const Eventitem = ({
  date,
  month,
  day,
  time,
  location,
  title,
  description,
  announcement,
  sponsor,
  val,
  eventName,
  mobile
}) => {
  console.log(date, month, day)

  return mobile ? (
    <div style={{ alignSelf: 'center', fontSize: '20px', lineHeight: '1.375em' }}>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            alignSelf: 'center',
            textAlign: 'center',
            lineHeight: '1.5em',
            paddingRight: '1em',
            color: '#DE6E4B'
          }}
        >
          <div style={{ fontSize: '30px' }}>{date}</div>
          <div style={{ fontSize: '20px' }}>{month}</div>
        </div>
        <div style={{ color: '#DE6E4B', fontSize: '25px', fontWeight: 'bold', paddingBottom: '10px' }}>{title}</div>
      </div>
      <div>{sponsor ? <SponsorBadge /> : <div></div>}</div>
      <div style={{ color: 'white' }}>
        <div>{description}</div>
        <div style={{ color: '#5BC0BE', display: 'flex', paddingTop: '10px' }}>
          At {location === undefined ? 'Not Decided Yet' : `${location}`}
          <div style={{ color: '#5BC0BE', whiteSpace: 'pre', fontSize: '20px' }}> from {time}</div>
        </div>
        <div style={{ display: 'flex', paddingTop: '10px' }}>{ticketEnableDisable(true, eventName, mobile)}</div>
      </div>
    </div>
  ) : (
    <div style={{ display: 'grid', color: 'white', gridTemplateColumns: '25% 75%' }}>
      <div
        style={{ alignSelf: 'center', textAlign: 'center', lineHeight: '2.5em', paddingRight: '1em', color: '#DE6E4B' }}
      >
        <div style={{ fontSize: '35px' }}>{date}</div>
        <div style={{ fontSize: '25px' }}>{month}</div>
        <div> {sponsor ? <SponsorBadge /> : <div />}</div>
      </div>

      <div style={{ alignSelf: 'center', fontSize: '20px', lineHeight: '1.375em' }}>
        <div style={{ color: '#DE6E4B', fontSize: '25px', fontWeight: 'bold', paddingBottom: '10px' }}>{title}</div>
        <div>{description}</div>
        <div style={{ color: '#5BC0BE', display: 'flex', paddingTop: '10px' }}>
          At {location === undefined ? 'Not Decided Yet' : `${location}`}
          <div style={{ color: '#5BC0BE', whiteSpace: 'pre', fontSize: '20px' }}> from {time}</div>
        </div>
        {ticketEnableDisable(true, eventName, mobile)}
      </div>
    </div>
  )
}
export default Eventitem
