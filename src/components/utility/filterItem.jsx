export const filterContacts = (data, filter) => {
  return data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
