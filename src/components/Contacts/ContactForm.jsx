import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css'


export default function ContactForm({ onAddContact }) {
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
    onAddContact(name, number);
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit} className={css.Form}>
      <label htmlFor="name"></label>
        <input
          placeholder='Enter your name'
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
            onChange={handleNameChange}
            className={css.FormItem}
      />
      <label htmlFor="number"></label>
        <input
          placeholder='Enter phone number'
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
            onChange={handleNumberChange}
            className={css.FormItem}
      />
      <button type="submit" className={css.FormBtn}>Add Contact</button>
    </form>
           
  );
}

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };