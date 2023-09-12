import React from 'react';
import { Contacts } from './contatcs/Contacts';
import { AddForm } from './add_inputs/AddForm';
import { Filter } from './filter/Fiter';
import { Wrapper } from './App.styled';
import { filterContacts } from './utility/filterItem';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // Добавить контакты
  handleAddContacts = (name, number, id) => {
    const item = { name, number, id };

    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(prev => ({ contacts: [...prev.contacts, item] }));
  };

  // Для фильтра
  handleChangeFilter = filter => {
    this.setState({ filter });
  };

  // Удаляем

  handleDeleteTodo = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(item => item.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredData = filterContacts(contacts, filter);
    return (
      <>
        <Wrapper>
          <h1>Phonebook</h1>
          <AddForm addContacts={this.handleAddContacts} />
          <h2>Contacts</h2>
          <Filter takeData={this.handleChangeFilter} filterValue={filter} />
          <Contacts filter={filteredData} deleteData={this.handleDeleteTodo} />
        </Wrapper>
      </>
    );
  }
}
