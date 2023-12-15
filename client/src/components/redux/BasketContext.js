// BasketContext.js
import React, { createContext, useState } from 'react';

export const BasketContext = createContext();

const BasketContextProvider = (props) => {
    
  const [basketItems, setBasketItems] = useState([]);
  

  const addToBasket = (product) => {
    console.log('Adding product to basket:', product);
    setBasketItems([...basketItems, product]);
  };

  const removeFromBasket = (productId) => {
    const updatedBasket = basketItems.filter((item) => item.id !== productId);
    setBasketItems(updatedBasket);
  };

  return (
    <BasketContext.Provider value={{ basketItems, addToBasket, removeFromBasket }}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
