import '../App.css';
import "../index.css";
import {Header} from "Header"
import {MainContent} from "Main-content"
import {Footer} from "Footer"
import React from "react"

function App() {
  return (
    <div className="App">
      <Header />

      <MainContent />
      
      <Footer />
    </div>
  );
}

export default App;
