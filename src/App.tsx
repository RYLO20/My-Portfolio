// src/App.tsx

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0B132B]">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
    </div>
  )
}

export default App;