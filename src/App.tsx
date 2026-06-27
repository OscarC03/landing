import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import BusinessCentral from './components/BusinessCentral'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1220] font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <BusinessCentral />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  )
}
