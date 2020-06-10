const langReducer = (state = 'id', action) => {
  switch (action.type) {
  case 'SET_LANG':
    return action.lang
  default:
    return state
  }
}

export const langChange = lang => {
  return {
    type: 'SET_LANG',
    lang,
  }
}

export default langReducer
