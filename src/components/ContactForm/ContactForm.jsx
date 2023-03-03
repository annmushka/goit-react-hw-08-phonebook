import React, { useState } from 'react';
import { FormEl, Label, Title, Input, Button } from './ContactForm.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsOper } from 'redux/operation';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsData.contacts.items);
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  const onNameChange = event => {
    setName(event.target.value);
  };

  const onTelChange = event => {
    setTel(event.target.value);
  };

  const onAddClick = event => {
    event.preventDefault();

    const contact = {
      name,
      id: nanoid(),
      tel,
    };

    if (contacts.some(el => el.name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    dispatch(addContactsOper(contact));

    reset();
  };

  const reset = () => {
    setName('');
    setTel('');
  };

  return (
    <FormEl onSubmit={onAddClick}>
      <Label>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onNameChange}
          value={name}
        />
        <Title>Number</Title>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={tel}
          onChange={onTelChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormEl>
  );
};
