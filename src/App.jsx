import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Testimonials />
    </>
  )
}

export default App
