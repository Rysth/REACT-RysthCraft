import { BrowserRouter, Routes, Route } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import englishTranslation from './translations/english/global.json';
import spanishTranslation from './translations/spanish/global.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: englishTranslation,
    },
    es: {
      translation: spanishTranslation,
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
