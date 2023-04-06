import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css'
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contactsSlice';


const Filter = ({ filter }) => {
  const dispatch = useDispatch();
  return (
  <label>
    <input type="text" value={filter} onChange={(e) => dispatch(updateFilter(e.currentTarget.value))} placeholder="Find contacts by name" className={css.FormItem}/>
  </label>
  )
};

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func,
  };