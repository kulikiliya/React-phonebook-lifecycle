import React from 'react';
import PropTypes from 'prop-types';
import { FilerInput } from './Filer.styled';

export const Filter = ({ takeData, filterValue }) => {
  return (
    <label>
      Filter
      <FilerInput
        onChange={e => takeData(e.target.value)}
        type="text"
        name="filter"
        value={filterValue}
      ></FilerInput>
    </label>
  );
};

Filter.propTypes = {
  takeData: PropTypes.func,
  filterValue: PropTypes.string,
};
