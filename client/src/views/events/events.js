import React, { useEffect } from 'react'
import { Item } from 'semantic-ui-react'
import eventBrite from '../../components/eventBrite'
import EventItem from '../../components/eventItem'

const events = () => {
  useEffect(() => {
    // Weekly meeting Event the modaltriggerelementid is what you should pass while calling which button goes to which event.
    eventBrite('77972898037', 'weekly')
    // Halloween Event the modaltriggerelementid is what you should pass while calling which button goes to which event.
    eventBrite('78026151319', 'halloween')
  }, [])

  return (
    <div>
      <EventItem
        date={`24th`}
        month={`O C T`}
        day={'Thursday'}
        time={'5pm-6pm'}
        location={'ERB 228'}
        title={'Metasploit Tutorial'}
        description={
          ' The meeting will focus on use of metasploit and its syntax. Learn to use metasploit a penetration testing framework to discover exploits, and validate vulnerabilities. - By Zehra Jafri.'
        }
        announcement={' [ This weeks meeting will be held at ERB 228 not ERB 316! ]'}
        sponsor={false}
        val={'icon'}
        eventName={'weekly'}
      />
      <EventItem
        date={`31st`}
        month={`O C T`}
        day={'Thursday'}
        time={'7pm-10pm'}
        //location={'ERB 228'}
        title={'COE Halloween Bash'}
        description={
          ' The College of Engineering Halloween Bash will be hosted by the UTA CSEC Club along with a few other COE clubs. This event will serve as an opportunity to meet new people in COE, discover new organizations to be a part of, and a cool way to spend Halloween. There will be food, games, activities, prizes, and a costume contest so be sure to wear your best costume and get ready to have fun!'
        }
        // announcement={' [ This weeks meeting will be held at ERB 228 not ERB 316! ]'}
        sponsor={true}
        val={'image'}
        eventName={'halloween'}
      />
    </div>
  )
}
export default events
