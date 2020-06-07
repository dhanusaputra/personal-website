import React from 'react'
import { langChange } from '../reducers/langReducer'
import { useDispatch } from 'react-redux'
import { Radio } from 'antd'

const LangFilter = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <Radio.Group defaultValue='ID' size='large'>
        <Radio.Button value='ID' onChange={() => dispatch(langChange('ID'))}>ID</Radio.Button>
        <Radio.Button value='EN' onChange={() => dispatch(langChange('EN'))}>EN</Radio.Button>
      </Radio.Group>
    </div>
  )
}

export default LangFilter
