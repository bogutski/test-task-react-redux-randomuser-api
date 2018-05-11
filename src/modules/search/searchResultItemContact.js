import React from 'react';

export const SearchResultItemContact = ({ item }) => {
  return (
    <ul>
      <li><strong>Phone:</strong> {item.phone}</li>
      <li><strong>Cell:</strong> {item.cell}</li>
      <li><strong>Email:</strong> {item.email}</li>
    </ul>
  );
};

