import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

import { Container, Title, TitleContacts } from './App.styled';

function App() {
  return (
    <Container>
      <Title>PhoneBook</Title>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactsList />
    </Container>
  );
}

export default App;
