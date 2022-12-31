import './home.css'

function Home() { 
  return (
    <div className="Home">
      <div class="home" id="home">
        <div class="social">
          <a href="https://github.com/OscarYopan" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/oscar-luis-yopan-95139b27/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-instagram"></i>        
          </a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-whatsapp"></i>        
          </a>
        </div>
        <div class="me">
          <h1 class="title">Oscar Yopan</h1>
          <h3 class="subtitle">Frontend Developer</h3>
          <p class="presentation">Hello! I am a developer student, making my first steps in this amazing universe, always looking for the next level.</p>
          <button class="button">Contact</button>
        </div>
        <div class="oscar-pic"></div>
      </div>
    </div>
  )  
}

export default Home