import './home.css'

function Home() { 
  return (
    <div className="Home">
      <div className="home" id="home">
        <div className="social">
          <a href="https://github.com/OscarYopan" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/oscar-luis-yopan-95139b27/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>        
          </a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp"></i>        
          </a>
        </div>
        <div className="me">
          <h1 className="title">Oscar Yopan</h1>
          <h3 className="subtitle">Frontend Developer</h3>
          <p className="presentation">Hello! I am a developer student, making my first steps in this amazing universe, always looking for the next level.</p>
          <button className="button">Contact</button>
        </div>
        <div className="oscar-pic"></div>
      </div>
    </div>
  )  
}

export default Home