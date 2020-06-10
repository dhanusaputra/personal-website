import React from 'react'
import { Radio } from 'antd'

const LangFilter = (props) => {
  return (
    <div>
      <Radio.Group defaultValue='ID' size='large'>
        <Radio.Button value='ID' onChange={() => props.handleChange('id')}>ID</Radio.Button>
        <Radio.Button value='EN' onChange={() => props.handleChange('en')}>EN</Radio.Button>
      </Radio.Group>
    </div>
  )
}

export default LangFilter
