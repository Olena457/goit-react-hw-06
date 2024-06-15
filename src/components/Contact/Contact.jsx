import css from './Contact.module.css';
import { RiUser3Fill } from 'react-icons/ri';
import { BiSolidPhone } from 'react-icons/bi';
import { useDispath } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispath();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.userCard}>
      <div className={css.userInfo}>
        <span className={css.userName}>
          <RiUser3Fill /> {name}
        </span>
        <span>
          <BiSolidPhone /> {number}
        </span>
      </div>
      <button
        className={css.deleteBtn}
        type="buttom"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
}
