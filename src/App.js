import React from "react"
import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Lviv" />
    <footer>
      This project was coded by Anastasiia Soltysiak and is {" "}
       <a href="https://github.com/nastyasolt/final-project-react" 
       target="_blank" 
       rel="noreferrer">
        open sourced on GitHub
       </a>
    </footer>
    </div>
    </div>
  );
}


