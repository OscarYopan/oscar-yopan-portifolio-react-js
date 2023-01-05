import './App.css'
import About from './components/About/about.jsx'
import Footer from './components/Footer/footer'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/home.jsx'
import Portifolio from './components/Portifolio/portifolio.jsx'
import Skills from './components/Skills/skills.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Portifolio />
      <Footer />
    </div>
  )
}

export default App
