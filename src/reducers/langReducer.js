const langReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_LANG':
    return action.lang
  case 'INIT_LANGS':
    return action.data
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

export const initLang = (langs) => {
  return {
    type: 'INIT_LANGS',
    data: langs
  }
}

export default langReducer
