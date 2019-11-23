import React from 'react'

const GoogleForm = ({ id }) => (
  <iframe
    id="googleForm"
    src={`https://docs.google.com/forms/d/e/${id}/viewform?embedded=true`}
    frameBorder="0"
    width="100%"
    height="100%"
  >
    Loading…
  </iframe>
)

export default GoogleForm
