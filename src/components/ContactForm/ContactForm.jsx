import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaRegAddressBook } from 'react-icons/fa6';
import css from './ContactForm.module.css';

import { useId } from 'react';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .required('Required')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!'),
});
const initialValues = {
  name: '',
  number: '',
};

function ContactForm() {
  const nameFieldId = useId();
  const telFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <>
        <div className={css.phoneBook}>
          <FaRegAddressBook className={css.homeIcon} />
          Phonebook
        </div>

        <Form className={css.contactForm}>
          <label className={css.contactFormlabel} htmlFor={nameFieldId}>
            Name
          </label>
          <div className={css.fieldWrapper}>
            <Field
              className={css.contactFormInput}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <label className={css.contactFormlabel} htmlFor={telFieldId}>
            Number
          </label>
          <div className={css.fieldWrapper}>
            <Field
              className={css.contactFormInput}
              type="text"
              name="number"
              id={telFieldId}
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>

          <button className={css.contactFormBtn} type="submit">
            Add contact
          </button>
        </Form>
      </>
    </Formik>
  );
}
export default ContactForm;
