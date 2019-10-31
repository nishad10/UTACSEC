let INITIAL_STATE = {
  updateProfileFailMsg: '',
  profile: null
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `GET_USER`:
        console.log(action.type,action.payload)
      return { ...state, profile: action.payload }
    default:
      return state
  }
}
