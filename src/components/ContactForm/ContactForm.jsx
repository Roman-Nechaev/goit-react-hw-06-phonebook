import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { getContactsValue } from 'features/contactsSlice';
import { addContacts } from 'features/contactsSlice';
import { Input, Forms, Button, IoPerson } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const contacts = useSelector(getContactsValue);
  const dispatch = useDispatch();

  const nameCheck = name => {
    return contacts.filter(contact => contact.name.includes(name));
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    const check = nameCheck(values.name);

    if (check.length <= 0) {
      dispatch(addContacts(values));
      return;
    }

    Report.failure(
      'Warning!',
      `"${values.name}" is already in contacts`,
      'Okay'
    );
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Forms>
        <label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button type="submit">
          <IoPerson size={26} />
        </Button>
      </Forms>
    </Formik>
  );
};

export default ContactForm;
