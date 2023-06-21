// .jsx

import React from 'react';
import Header from './Header';
import Products from './Products';

const ParentComponent = () => {
  const handleSearchChange = (value) => {
    // Handle the search change logic here
    // You can update the state or perform any other actions
  };

  return (
    <>
      <Header handleSearchChange={handleSearchChange} />
      <Products />
    </>
  );
};

export default ParentComponent;