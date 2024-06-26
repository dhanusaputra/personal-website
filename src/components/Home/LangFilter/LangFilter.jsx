import { Radio } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const LangFilter = (props) => {
  const langs = useSelector((state) => state).sort((a, b) =>
    a.id < b.id ? -1 : Number(a.id > b.id)
  );
  return (
    <div>
      <Radio.Group defaultValue='EN' size='large'>
        {langs.map((lang) => (
          <Radio.Button
            key={lang.id}
            value={lang.id.toUpperCase()}
            onChange={() => props.handleChange(lang.id)}
          >
            {lang.id.toUpperCase()}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};

export default LangFilter;
