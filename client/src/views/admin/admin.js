import React from 'react'
import { Container, Divider, Header, Tab, Segment } from 'semantic-ui-react'

import EventForm from '../../components/eventForm'
import EventDelete from '../../components/eventDelete'
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
      menuItem: 'Events Delete',
      render: () => (
        <Tab.Pane style={{ background: 'black' }} attached={false}>
          <EventDelete />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Coming Soon',
      render: () => (
        <Tab.Pane style={{ background: 'black' }} attached={false}>
          Coming Soon
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
