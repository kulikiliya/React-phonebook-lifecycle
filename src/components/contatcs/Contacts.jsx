import React from 'react';
import PropTypes from 'prop-types';
import { ContainerDiv, Ul, Button } from './Contacts.styled';

export const Contacts = ({ filter, deleteData }) => {
  return (
    <ContainerDiv>
      <Ul>
        {filter.map(item => (
          <li key={item.id}>
            {item.name}: {item.number}
            <Button onClick={() => deleteData(item.id)}>Delete</Button>
          </li>
        ))}
      </Ul>
    </ContainerDiv>
  );
};

Contacts.propTypes = {
  filter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteData: PropTypes.func,
};
