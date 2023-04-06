import React from 'react';
import css from './Contacts.module.css'
import {  useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice'

function Contacts({contacts}) {
  const dispatch = useDispatch();

  return (
      <div>
           <ul>{contacts.map((contact) => (
                <li key={contact.id} className={css.ContactListItem}>
                <p>{contact.name}</p>
                <p className={css.TitlePhoneNumber}>{contact.number}</p>
                   <button onClick={() => dispatch(deleteContact(contact.id))} className={css.FormBtn}>Delete</button>
                </li>
            ))}
           </ul>
        </div>
  );
}

export default Contacts;

