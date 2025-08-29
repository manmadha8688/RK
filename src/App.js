import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import About from './components/About/About';

function App() {
  return (
    <div >
       <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
