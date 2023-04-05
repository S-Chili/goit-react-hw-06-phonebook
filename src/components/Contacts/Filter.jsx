import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css'

const Filter = ({ filter, onFilterChange }) => (
  <label>
    <input type="text" value={filter} onChange={onFilterChange} placeholder="Find contacts by name" className={css.FormItem}/>
  </label>
);

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };