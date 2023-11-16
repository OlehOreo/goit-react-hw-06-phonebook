import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import { Wrapper, Phone, BtnDelete, ContactInfo } from './ContactsItem.styled';

export const ContactsItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Wrapper>
      <ContactInfo>
        {name} : <Phone>{number}</Phone>
      </ContactInfo>
      <BtnDelete type="button" onClick={handleDelete}>
        Delete
      </BtnDelete>
    </Wrapper>
  );
};
