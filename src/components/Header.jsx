import './Header.css'

function Header() {
  return <div className="header">
    <header class="header" id="header">
      <nav class="nav">
        <div class="nav-container">
          <div id="logo">
            <h3 class="logo"><a href="index.html">Oscar Yopan</a></h3>
          </div>
          <ul class="menu">
            <li><a href="#" class="current">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#portifolio">Portifolio</a></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
}

export default Header