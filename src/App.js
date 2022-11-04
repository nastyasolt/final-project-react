import React from "react"
import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Lviv" />
    <footer>
      This project was coded by <a href="https://www.linkedin.com/in/anastasiia-soltysiak-13a754119/" target="_blank" rel="noreferrer">Anastasiia Soltysiak</a> and is {" "}
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


