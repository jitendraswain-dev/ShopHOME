import React, { createContext, useState } from 'react';
import Nav from './Nav/Nav';
import Hero from './Hero/Hero';

export const CartCount = createContext();

const AllComponents = () => {
  const [count1, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categoreis');

  return (
    <CartCount.Provider
      value={{
        count1,
        setCount,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      <Nav />
      <Hero />
    </CartCount.Provider>
  );
};

export default AllComponents;
