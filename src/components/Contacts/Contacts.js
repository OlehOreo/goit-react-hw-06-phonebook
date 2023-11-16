import { ContactList } from 'components/ContactList/ContactList';
import { Message } from 'components/Notiflix/Message';
import { useSelector } from 'react-redux';
import { getContacts, getSearchResults } from 'redux/selectors';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getSearchResults);
  const filteredContacts = contacts.filter(({ name, number }) => {
    if (filter.length > 0) {
      return (
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.replace(/\D/g, '').includes(filter)
      );
    }

    return contacts;
  });

  return (
    <>
      {contacts.length === 0 ? (
        <Message info={'No contacts add a contact'} />
      ) : (
        <>
          {filteredContacts.length === 0 && (
            <Message info={'contact not found'} contact={filter} />
          )}
          <ContactList filteredContacts={filteredContacts} />
        </>
      )}
    </>
  );
};
