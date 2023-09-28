import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router } from "react-router-dom"
import './App.css'
import Routes from './Routes'
import Menu from './Menu'


export default function App() {
  
  return (
    <div className="contener">
      <Router>
        <Menu/>
        <Routes />
      </Router>
    </div>
  );
}

