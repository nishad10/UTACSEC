let INITIAL_STATE = {
  twitterFollowers: 0
}
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_TWITTER':
      return { ...state, twitterFollowers: action.payload[0].followers_count }
    default:
      return state
  }
}
