import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import MesRecettes from './pages/MesRecettes';
import Glossary from './pages/Glossary';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function App() {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState();

  /*useEffect( () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        setRandom(data)
        console.log(data);
      });
  }, []);*/

  return (
    <>
      <Header />
      <div className="max-w-screen-xl font-body font-normal m-auto py-2 px-2 sm:px-4">
      <Routes>
        <Route path="/" element={<Home recette={random} />} />
        <Route path="/mes-recettes" element={<MesRecettes/>} />
        <Route path="/glossaire" element={<Glossary/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
    </>
  )
}

export default App
