import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContactsValue } from 'features/contactsSlice';

import { getFilterValue } from 'features/filterContactsSlice';

import { NoContacts } from './NoContacts';

import {
  Container,
  Info,
  Item,
  Text,
  Btn,
  PersonOutline,
  CallOutline,
  IoTrashOut,
} from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(getContactsValue);
  const filter = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const quantityContacts = contacts.length;

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {quantityContacts.length <= 0 ? (
        <NoContacts />
      ) : (
        <>
          <Info>Quantity yours contacts: {quantityContacts}</Info>
          <Container>
            {visibleContacts.map(({ id, name, number }) => (
              <Item key={id}>
                <Text>
                  <PersonOutline size={22} />
                  {name}: <CallOutline size={22} />
                  {number}
                </Text>
                <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
                  <IoTrashOut size={20} />
                </Btn>
              </Item>
            ))}
          </Container>
        </>
      )}
    </>
  );
};

export default ContactsList;
