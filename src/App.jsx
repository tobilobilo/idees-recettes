import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Data from './Data'
import Header from './components/Header'
import Footer from './components/Footer'
import Alert from './components/ui/Alert'
import Home from './pages/Home';
import MesRecettes from './pages/MesRecettes';
import Glossary from './pages/Glossary';
import Admin from './pages/Admin';
import Recette from './pages/Recette';
import CreerRecette from './pages/MesRecettes/CreerRecette';
import NotFound from './pages/NotFound';

function App() {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState();

  return (
    <>
      <Data />
      <Header />
      <main className="max-w-screen-2xl font-body font-normal m-auto py-2 px-2 sm:px-4 md:px-8 ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mes-recettes" element={<MesRecettes/>} />
        <Route path="/glossaire" element={<Glossary/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/recette/nouvelle" element={<CreerRecette/>} />
        <Route path="/recette/:id" element={<Recette/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </main>
      <Footer />
      <Alert />
    </>
  )
}

export default App
