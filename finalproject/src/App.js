import "./App.css";
import "./index.css";

import React, { useState } from "react";

// import About from "/";
// import Contact from "/";
import { Footer } from "./Footer";
// import Gallery from "/";
import { Header } from "./Header";
// import Home from "/";
import { MainContent } from "./Main-content";
import Modal from "react-modal";
import { ProductDetails } from "./products/product-details";
import { Products } from "./products/products";
import { Router } from "@reach/router";
import { items } from "./items";

function App() {
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const addToCart = itemToAdd => {
    const existingItem = cart.find(item => item.id === itemToAdd.id);

    if (existingItem)
      setCart(prev => [
        ...prev.filter(item => item.id !== itemToAdd.id),
        { ...existingItem, amount: existingItem.amount + 1 }
      ]);
    else setCart(prev => [...prev, itemToAdd]);
  };

  return (
    <div className="App">
      <Header setIsOpen={setIsOpen} />

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          contentLabel="Shopping cart"
        >
          {cart.map(item => (
            <>
              <span>{JSON.stringify(item)}</span>
              Total sum =
              {cart.reduce((acc, curr) => {
                acc = acc + curr.amount * curr.price;

                return acc;
              }, 0)}
            </>
          ))}

          <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
      </div>

      <Router>
        <MainContent items={items} addToCart={addToCart} path="/" />
        <Products items={items} addToCart={addToCart} path="/products" />
        <ProductDetails
          items={items}
          addToCart={addToCart}
          path="/products/:id"
        />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
