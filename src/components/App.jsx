import ContactForm from './Contacts/ContactForm';
import Contacts from './Contacts/Contacts';
import Wrapper from './Contacts/Wrapper';


export default function App() {

  return (
    <div>
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm/>
      </Wrapper>
      <Wrapper>
        <h2>Contacts</h2>
        
        <Contacts/>
      </Wrapper>
    </div>
         
  )
}  