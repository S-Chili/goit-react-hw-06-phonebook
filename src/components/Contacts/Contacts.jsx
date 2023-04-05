import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css'

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
      <div>
           <ul>{contacts.map((contact) => (
                <li key={contact.id} className={css.ContactListItem}>
                <p>{contact.name}</p>
                <p className={css.TitlePhoneNumber}>{contact.number}</p>
                   <button onClick={() => onDeleteContact(contact.id)} className={css.FormBtn}>Delete</button>
                </li>
            ))}
           </ul>
        </div>
  );
}

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};