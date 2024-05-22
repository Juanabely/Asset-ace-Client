import React from 'react';
import { Select } from 'antd';

const onSearch = (value) => {
  console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option,) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
const DropUser = ({setSearchQuery}) => (
  <Select
    showSearch
    placeholder="Relevance"
    optionFilterProp="children"
    onChange={(e)=> setSearchQuery(value)}
    onSearch={onSearch}
    filterOption={filterOption}
    options={[
      {
        value: 'good',
        label: 'Good condition',
      },
      {
        value: 'bad',
        label: 'Bad condition',
      },
      {
        value: 'medium',
        label: 'Medium condition',
      },
    ]}
  />
);
export default DropUser;