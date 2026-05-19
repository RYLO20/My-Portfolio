import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <div className="bg-[#0B132B] min-h-screen">
      <Hero />
      <Services />
      <Projects />
      <Footer /> {/* Add Footer here */}
    </div>
  )
}

export default App;