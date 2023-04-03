import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Header from './Header'
import Home from './Home';
import Glossary from './Glossary';
import Admin from './Admin';
import NotFound from './NotFound';

function App() {
  const [count, setCount] = useState(0);
  const [categories, setCategories] = useState([]);

  /*useEffect( () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        setCategories(data)
        console.log(categories);
        console.log(data);
      });
  }, []);*/

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/glossaire" element={<Glossary/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
