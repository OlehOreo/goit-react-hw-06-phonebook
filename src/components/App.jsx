import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Section, Title, SubTitle } from './App.style';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <Contacts />
    </Section>
  );
};
