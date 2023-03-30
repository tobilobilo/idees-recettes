import { useState, useEffect } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Header from './Header'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Box>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/glossaire" element={<Glossary/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Box>
      </Box>
    </>
  )
}

export default App
