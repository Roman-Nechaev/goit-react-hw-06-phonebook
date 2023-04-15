import { useSelector, useDispatch } from 'react-redux';

import { setFilter, getFilterValue } from '../../features/filterContactsSlice';
import { deleteContact, getContactsValue } from '../../features/contactsSlice';

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
  const quantity = contacts.length;

  console.log(filter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      {!quantity ? (
        <NoContacts />
      ) : (
        <>
          <Info>Quantity yours contacts: {quantity}</Info>
          <Container>
            {visibleContacts.map(({ id, name, number }) => (
              <Item key={id}>
                <Text>
                  <PersonOutline size={22} />
                  {name}: <CallOutline size={22} />
                  {number}
                </Text>
                <Btn type="button" onClick={() => handleDelete(id)}>
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

// ContactsList.propTypes = {
//   quantity: PropTypes.number.isRequired,
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
// { quantity, contacts, onDeleteContact }
