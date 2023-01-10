import './Header.css'
import './header.js'

function Header() {
  return <div className="header">
    <header className="header" id="header">
      <nav className="nav">
        <div className="nav-container">
          <div id="logo">
            <h3 className="logo"><a href="index.html">Oscar Yopan</a></h3>
          </div>
          <ul className="menu">
            <li><a href="#home" className="current">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#portifolio">Portifolio</a></li>
          </ul>
          <div className='mobile-container'>
            <button><i class="fa-solid fa-bars"></i></button>
            <button><i class="fa-solid fa-xmark"></i></button>
          </div>
        </div>
      </nav>
    </header>
  </div>
}

export default Header