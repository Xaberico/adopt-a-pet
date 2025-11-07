import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from './components/NavBar';
import './App.css';

import Home from './pages/Home';
import Adoptar from './pages/Adoptar';
import Donaciones from './pages/Donaciones';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adoptar" element={<Adoptar />} />
            <Route path="/donaciones" element={<Donaciones />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;