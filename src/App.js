import './App.css'
import About from './components/About/about'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/home.jsx'
import Portifolio from './components/Portifolio/portifolio.jsx'
import Skills from './components/Skills/skills.jsx'
import Swipper from './components/Swipper/swipper'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Portifolio />
      <Swipper />
    </div>
  )
}

export default App
