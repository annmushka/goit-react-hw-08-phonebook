import { useDispatch } from 'react-redux';
import { Item, Title, Button, Span } from './Contacts.Styled';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsOper, deleteContactsOper } from 'redux/operation';
import { selectFilterContacts } from 'redux/selectors';

export function Contacts() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterContacts);

  useEffect(() => {
    dispatch(fetchContactsOper());
  }, [dispatch]);

  const onDelete = id => {
    dispatch(deleteContactsOper(id));
  };

  return (
    <ul>
      {filter.map(({ name, id, number }) => {
        return (
          <Item key={id}>
            <Span />
            <Title>
              {name}: {number}
            </Title>
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </ul>
  );
}
