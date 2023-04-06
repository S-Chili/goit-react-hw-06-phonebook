import { useState, useEffect } from 'react';
import ContactForm from './Contacts/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Contacts/Filter';
import Wrapper from './Contacts/Wrapper';
import { useSelector } from 'react-redux';


export default function App() {
  const filter = useSelector((state) => state.contacts.filter);
  const contacts = useSelector((state) => state.contacts.contacts);

  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [contacts, filter]);

  return (
    <div>
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm/>
      </Wrapper>
      <Wrapper>
        <h2>Contacts</h2>
        <Filter filter={filter} />
        <Contacts contacts={filteredContacts}/>
      </Wrapper>
    </div>
         
  )
}  