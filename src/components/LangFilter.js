import React from 'react'
import { langChange } from '../reducers/langReducer'
import { useDispatch } from 'react-redux'

const LangFilter = () => {
  const dispatch = useDispatch()

  return (
    <div>
      ID
      <input type='radio' name='lang' onChange={() => dispatch(langChange('ID'))} />
      EN
      <input type='radio' name='lang' onChange={() => dispatch(langChange('EN'))} />
    </div>
  )
}

export default LangFilter
