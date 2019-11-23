import React from 'react'
import { Container, Divider, Header, Tab, Segment } from 'semantic-ui-react'

import EventForm from '../../components/eventForm'
import EventEdit from '../../components/eventEdit'
import ReadMe from '../../components/readme'

const Admin = props => {
  const panes = [
    {
      menuItem: 'Events Add',
      render: () => (
        <Tab.Pane style={{ background: 'black' }} attached={false}>
          <EventForm />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Events Edit',
      render: () => (
        <Tab.Pane style={{ background: 'black' }} attached={false}>
          <EventEdit />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'ReadMe!',
      render: () => (
        <Tab.Pane style={{ background: 'black' }} attached={false}>
          <ReadMe />
        </Tab.Pane>
      )
    }
  ]
  return (
    <Container>
      <Divider hidden />
      <Header as="h1" dividing inverted>
        Please enter the event information below.
      </Header>

      <Tab
        menu={{
          inverted: true,
          attached: false,
          tabular: false,
          pointing: true,
          secondary: true
        }}
        panes={panes}
      />
    </Container>
  )
}

export default Admin
