import "../App.css";
import "../index.css";
import { Router } from "@reach/router";
import Home from "/";
import Products from "/";
import Contact from "/";
import Gallery from "/";
import About from "/";

import React, { useState } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { MainContent } from "./Main-content";

function App() {
  const items = [
    {
      name: "BELTED TULLE MIDI DRESS",
      price: "775",
      currency: "€",
      sizes: ["XS", "S", "M"],
      details: `The statement is yours to make with this sculptural tulle dress
        from noir kei ninomiya. The design stays true to the label's dark
        aesthetic in jet black, and it secures at the chest with a
        belt-style harness before cascading into panels of layered tulle
        of various lengths. We envision it creating a distinctive
        silhouette when worn over slim-fitting black separates.`,
      id: 1
    },
    {
      name: "TULLE CROP TOP",
      price: "450",
      currency: "€",
      sizes: ["XS", "S", "M"],
      details: `noir kei ninomiya reimagines a bondage-themed silhouette through a softer lens; 
        creating this black harness-style crop top from black tulle complete with exaggerated bow detailing. An avant-garde layering piece, 
        style it over a simple white T-shirt to keep its details in focus.`,
      id: 2
    },
    {
      name: "RUFFLE-TRIMMED MIDI DRESS",
      price: "610",
      currency: "€",
      sizes: ["XS", "S", "M"],
      details: `Reinvigorate your sundress rotation with this pink midi dress from noir kei ninomiya. 
      Made from crisp cotton to a floaty trapeze silhouette, it's topped with slender shoulder straps for a graceful look. 
      We think the eye-catching ruffle trim is the perfect way to commemorate the resumption of social gatherings.`,
      id: 3
    },
    {
      name: "BOW-EMBELISHED MIDI DRESS",
      price: "1,160",
      currency: "€",
      sizes: ["XS", "S", "M"],
      details: `When a special occasion calls for dressing up – or when you simply fancy feeling glamourous – don this frock from noir kei ninomiya. 
      Made in Japan from bubblegum pink tulle, it has a pinafore silhouette, with bows running from the shoulder straps to the hem. 
      Wear yours over a simple white T-shirt to keep it in focus.`,
      id: 4
    },
    {
      name: "PINK TULLE-TRIMMED MIDI SKIRT",
      price: "650",
      currency: "€",
      sizes: ["XS", "S", "M"],
      details: `The signature eerie glamour of noir kei ninomiya abounds in this black midi skirt. 
      Made from layers of tulle, the style is adorned with bow appliqués adorning its high rise waist, and it cascades into a voluminous pleated skirt. 
      Style with a tonal crop top and combat boots.`,
      id: 5
    },
    {
      name: "LEATHER PLATFORM ANKLE BOOTS",
      price: "1,480",
      currency: "€",
      sizes: ["37", "38", "39"],
      details: `noir kei ninomiya joins forces with Church's to create these striking platform boots. 
      Made from polished black calfskin, they're studded with silver-toned embellishments that build up a pattern of flowers along the soles. 
      The lace-up tongues – which actually never need undoing, thanks to the zipped sides – pay homage to Church's traditional brogue silhouettes.`,
      id: 6
    },
    {
      name: "LASER-CUT LEATHER BROGUES",
      price: "610",
      currency: "€",
      sizes: ["37", "38", "39"],
      details: `noir kei ninomiya collaborates with Church's to create unconventional takes on classic black brogues. 
      Made from supple calfskin leather, they're strewn with delicate floral appliqués around the soles, and finished with laser-cut detailing on the uppers. 
      Wear with the label's tulle dresses.`,
      id: 7
    },
    {
      name: "BLACK TULLE-TRIMMED MIDI SKIRT",
      price: "650",
      currency: "€",
      sizes: ["XS", "S", "M"],
      details: `The signature eerie glamour of noir kei ninomiya abounds in this black midi skirt. 
      Made from layers of tulle, the style is adorned with bow appliqués adorning its high rise waist, and it cascades into a voluminous pleated skirt. 
      Style with a tonal crop top and combat boots.`,
      id: 8
    },
    {
      name: "DIAMOND-QUILTED COTTON TOP",
      price: "475",
      currency: "€",
      sizes: ["XS", "S", "M"],
      details: `Upon seeing the diamond-quilted hem of this noir kei ninomiya top, we immediately think of down jackets. 
      Very much in line with the Japanese label's alternative aesthetic, the cotton poplin design is in fact an otherwise classic style: made in black with a sleeveless cut, 
      it has a feminine frill that underscores the bust.`,
      id: 9
    }
  ];

  const [cart, setCart] = useState([]);

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
      <Header />

      <MainContent />

      <Footer />

      <Router>
          <Home path="/" />
          <Products path="Products" />
          <About path="/" />
          <Contact path="/" />
          <Gallery path="/" />
        </Router>
    </div>
  );
}

export default App;
