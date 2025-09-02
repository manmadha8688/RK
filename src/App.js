import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/Services/Services';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div >
       <Navbar />
       <ScrollToTop />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
