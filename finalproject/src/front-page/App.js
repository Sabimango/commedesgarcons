import "../App.css";
import "../index.css";

import React, {useState} from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { MainContent } from "./Main-content";

function App() {
    const items = [{
        name: 'Noir kei',
        price: '3500',
        currency: '€',
        sizes: ['XS', 'S', 'M'],
        details: 'Detailed description goes here',
        id: 1
    }, {
        name: 'Noir bae',
        price: '3500',
        currency: '€',
        sizes: ['XS', 'S', 'M'],
        details: 'Detailed description goes here',
        id: 2
    }];

  const [cart, setCart] = useState([]);

  const addToCart = (itemToAdd) => {
    const existingItem = cart.find(item => item.id === itemToAdd.id);

    if(existingItem)
      setCart(prev => [...prev.filter(item => item.id !== itemToAdd.id), {...existingItem, amount: existingItem.amount+1}])
    else
    setCart(prev => [...prev, itemToAdd])
  }

  return (
    <div className="App">
      <Header />

      <MainContent />

      <Footer />
    </div>
  );
}

export default App;
