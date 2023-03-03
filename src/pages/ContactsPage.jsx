import { ContactForm } from '../components/ContactForm/ContactForm';
import { Contacts } from '../components/Contacts/Contacts';
import { Filter } from '../components/Filter/Filter';

export const ContactsPage = () => {
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    </>
  );
};
