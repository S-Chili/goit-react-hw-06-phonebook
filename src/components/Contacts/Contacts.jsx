import React from 'react';
import css from './Contacts.module.css'
import Filter from './Filter';
import {  useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice'

function Contacts() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.contacts.filter);
  const contacts = useSelector((state) => state.contacts.contacts);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
   <div>
      <Filter filter={filter} />
         <ul>{filteredContacts.map((contact) => (
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

