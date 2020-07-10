import React from 'react'
import { Radio } from 'antd'
import { useSelector } from 'react-redux'

const LangFilter = (props) => {
  const langs = useSelector(state => state)
  return (
    <div>
      <Radio.Group defaultValue='ID' size='large'>
        {langs
          .sort((a, b) => a.id > b.id)
          .map(lang =>
            <Radio.Button key={ lang.id } value={ lang.id.toUpperCase() } onChange={() => props.handleChange(lang.id)}>{ lang.id.toUpperCase() }</Radio.Button>
          )}
      </Radio.Group>
    </div>
  )
}

export default LangFilter
