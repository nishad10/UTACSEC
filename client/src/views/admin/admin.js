import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";

import EventForm from "../../components/eventForm";

const Admin = props => (
  <Container>
    <Divider hidden />
    <Header as="h1" dividing inverted>
      Please enter the event information below.
    </Header>
    <EventForm/>
  </Container>
);


export default Admin;
