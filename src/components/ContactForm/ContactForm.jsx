import { Formik, Form, Field, ErrorMessage } from 'formik';
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
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className={css.phoneBook}>
          <div className={css.title}>Phonebook</div>
          <div className={css.contactForm}>
            <Form>
              <div>
                <label className={css.contactFormlabel} htmlFor={nameFieldId}>
                  Name
                </label>
                <Field
                  className={css.contactFormInput}
                  type="text"
                  name="number"
                  id={nameFieldId}
                />
                <ErrorMessage
                  className={css.error}
                  name="name"
                  component="span"
                />
              </div>
              <div>
                <label className={css.contactFormlabel} htmlFor={telFieldId}>
                  Number
                </label>
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
          </div>
        </div>
      </Formik>
    </>
  );
}
export default ContactForm;
