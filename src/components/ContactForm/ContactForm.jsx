import React, { useState } from 'react';
import { FormEl, Label, Title, Input, Button } from './ContactForm.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsOper } from 'redux/operation';
// import { nanoid } from '@reduxjs/toolkit';
import { selectContactsItem } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItem);
  const [name, setName] = useState('');
  // const [tel, setTel] = useState('');
  const [number, setNumber] = useState('');

  const onNameChange = event => {
    setName(event.target.value);
  };

  const onTelChange = event => {
    setNumber(event.target.value);
  };

  const onAddClick = event => {
    event.preventDefault();

    const contact = {
      name,
      number,
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
    setNumber('');
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
          value={number}
          onChange={onTelChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormEl>
  );
};
