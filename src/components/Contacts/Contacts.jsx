import { useDispatch } from 'react-redux';
import { Item, Title, Button, Span } from './Contacts.Styled';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsOper, deleteContactsOper } from 'redux/operation';

export function Contacts() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contactsData.filter);
  const contacts = useSelector(state => state.contactsData.contacts.items);

  useEffect(() => {
    dispatch(fetchContactsOper());
  }, [dispatch]);

  const onDelete = id => {
    dispatch(deleteContactsOper(id));
  };

  const filterContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <ul>
      {filterContacts.map(({ name, id, tel }) => {
        return (
          <Item key={id}>
            <Span />
            <Title>
              {name}: {tel}
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
