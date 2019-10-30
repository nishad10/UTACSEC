import React, { useEffect, useState } from 'react'
import { Header, Divider } from 'semantic-ui-react'
import eventBrite from '../../components/eventBrite'
import Eventitem from '../../components/eventItem'

const events = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    // Weekly meeting Event the modaltriggerelementid is what you should pass while calling which button goes to which event.
    eventBrite('77972898037', 'weekly')
    // Halloween Event the modaltriggerelementid is what you should pass while calling which button goes to which event.
    eventBrite('78026151319', 'halloween')
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowSizeChange)
  }, [])
  const mobile = width < 600
  return (
    <div style={{ padding: mobile ? '5vw 10vw' : '5vw 15vw' }}>
      <Divider horizontal inverted style={{ margin: '5vw 0vw ' }}>
        <Header as="h4" style={{ color: 'rgb(158, 158, 158)', fontSize: mobile ? '4vw' : '1.5vw' }}>
          RSVP Now
        </Header>
      </Divider>
      <Divider inverted style={{ margin: '3vw 10vw' }} />
      <Eventitem
        date={`31st`}
        month={`O C T`}
        day={'Thursday'}
        time={'7pm-10pm'}
        location={'NH Atrium'}
        title={'COE Halloween Bash'}
        description={
          ' The College of Engineering Halloween Bash will be hosted by the UTA CSEC Club along with a few other COE clubs. This event will serve as an opportunity to meet new people in COE, discover new organizations to be a part of, and a cool way to spend Halloween. There will be food, games, activities, prizes, and a costume contest so be sure to wear your best costume and get ready to have fun!'
        }
        // announcement={' [ This weeks meeting will be held at ERB 228 not ERB 316! ]'}
        sponsor={true}
        val={'image'}
        eventName={'halloween'}
        mobile={mobile}
      />
    </div>
  )
}
export default events
