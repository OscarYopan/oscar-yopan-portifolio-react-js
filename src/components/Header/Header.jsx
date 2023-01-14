import React from 'react'
import './Header.css'

function Header() {
  // ************** Close Menu on Click *****************
  React.useEffect(() => {
    const links = document.querySelectorAll('menu ul li a')
    links.addEventListener('click', closeMenuOnClick)
    function closeMenuOnClick() {
      const menu = document.querySelector('.menu')
      for (const link of links) {
        link.addEventListener('click', () => {
          menu.classList.remove('open')
        })
      }
    }
  }, []);

  return <div className="header">
    <header className="header" id="header">
      <nav className="nav">
        <div className="nav-container">
          <div id="logo">
            <h3 className="logo"><a href="index.html">Oscar Yopan</a></h3>
          </div>
          <div  className="menu">
            <ul>
              <li><a href="#home" className="current">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#portifolio">Portifolio</a></li>
            </ul>
          </div>
          <button className='toggle' onClick={openMenu}><i class="fa-solid fa-bars"></i></button>
        </div>
      </nav>
    </header>
  </div>
}

// ************** Open Mobile Menu ********************
function openMenu() {
  const menu = document.querySelector('.menu')
  menu.classList.toggle('open')
}

// ************** Nav Animation ***********************
// function fixNav() {
//   const nav = document.querySelector('.nav')
//   window.addEventListener('scroll', fixNav)
//   if (window.scrollY > nav.offsetHeight + 150) {
//     nav.classList.add('active')
//     console.log(nav.offsetHeight)
//   } else {
//     nav.classList.remove('active')
//   }
// }

export default Header