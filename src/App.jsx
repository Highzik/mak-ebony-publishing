import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SlideShow from './components/SlideShow';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Testimonials />
      <SlideShow />
      <Contact />
      <Footer />
    </>
  )
}

export default App
