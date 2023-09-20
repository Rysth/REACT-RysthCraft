import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element="Projects" />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
