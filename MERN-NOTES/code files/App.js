import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Users from "./users";
import About from "./about";
import Contact from "./contact";
import './App.css'
import Textbox from "./onetxtbox";
import Addmul from "./addition-multiplication";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <a href="/">Home</a>
            <a href="/users">Users</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            {/* <a href="/textbox">Textbox</a> */}
            <a href="/addition-multiplication">Addition-Multiplication</a>
    
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/textbox" element={<Textbox />} /> */}
            <Route path="/addition-multiplication" element={<Addmul />} />
          </Routes>
        </main>
      </div>
    </Router>

    // <Textbox/>
    // <Addmul/>
  );
}

export default App;
