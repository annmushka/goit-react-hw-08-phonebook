import { useDispatch, useSelector } from 'react-redux';
import { Title, Input } from './Filter.Styled';
import { filterContacts } from 'redux/contactSlice';
import { selectFilter } from 'redux/selectors';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onSearch = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <div>
      <Title>Find contacts by name:</Title>
      <Input type="text" name="filterTerm" value={filter} onChange={onSearch} />
    </div>
  );
}
