let INITIAL_STATE = {
  twitterFollowers: 0,
  events: [{}],
  eventsAdmin: [{}],
  loading: false
}
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_TWITTER':
      return { ...state, twitterFollowers: action.payload[0].followers_count }
    case 'GET_EVENTS':
      return { ...state, events: action.payload }
    case 'GET_EVENTS_ADMIN':
      return { ...state, eventsAdmin: action.payload }
    case 'LOADING':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
