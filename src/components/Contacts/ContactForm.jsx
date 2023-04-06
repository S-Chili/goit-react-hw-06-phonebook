import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css'
import { useDispatch } from 'react-redux';
import {addContactAction} from '../../redux/contactsSlice' 
import { nanoid } from 'nanoid';


export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  }

  const handleNumberChange = (evt) => {
    setNumber(evt.target.value);
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addContactAction({name, number, id:nanoid()}))
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit} className={css.Form}>
      <label htmlFor="name" id="name-label">
        
        <input
          placeholder="Enter your name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
          className={css.FormItem}
        />
      </label>
      <label htmlFor="number" id="number-label">
        
        <input
          placeholder="Enter phone number"
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          title="Phone number must be in the format xxx-xx-xx"
          required
          value={number}
          onChange={handleNumberChange}
          className={css.FormItem}
        />
      </label>
      <button type="submit" className={css.Button}>
        Add contact
      </button>
    </form>  
  );
}

ContactForm.propTypes = {
    onAddContact: PropTypes.func,
  };