import css from './SearchBox.module.css';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filterSlice';

function SearchBox() {
  const searchFieldId = useId();
  const { name } = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.SearchBox}>
      <label className={css.label} htmlFor={searchFieldId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
}
export default SearchBox;
