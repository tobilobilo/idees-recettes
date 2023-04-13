import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Alert from './components/ui/Alert'
import Home from './pages/Home';
import MesRecettes from './pages/MesRecettes';
import Glossary from './pages/Glossary';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function App() {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState();

  const [dataWarning, setDataWarning] = useState(false);

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
      <main className="max-w-screen-2xl font-body font-normal m-auto py-2 px-2 sm:px-4 md:px-8 ">
      <Routes>
        <Route path="/" element={<Home recette={random} />} />
        <Route path="/mes-recettes" element={<MesRecettes/>} />
        <Route path="/glossaire" element={<Glossary/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </main>
      <Footer />
      <Alert />
    </>
  )
}

export default App
