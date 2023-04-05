import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Contacts/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Contacts/Filter';
import Wrapper from './Contacts/Wrapper';

export default function App() {

  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
   localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
    
  const handleAddContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    const isNameExists = contacts.find(contact => contact.name === name);
    if (isNameExists) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  }

  const handleFilterChange = (evt) => {
    setFilter(evt.target.value);
  }

  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  const handleDeleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter((contact) => contact.id !== id)
    );
  }

  return (
    <div>
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
      </Wrapper>
      <Wrapper>
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={handleFilterChange} />
        <Contacts contacts={getFilteredContacts} onDeleteContact={handleDeleteContact}/>
      </Wrapper>
    </div>
         
  )
}  