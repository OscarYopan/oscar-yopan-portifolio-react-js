import './home.css'
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.js" integrity="sha512-S1KaVll2UTj29SOXML7O4LxU7zEoQhJgnondHE/ZvNrk7H4Rc9TLFKDaWuEzsHmAEkJnWFedc0hcVrpvFTOlwA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

function Home() { 
  return (
    <div className="Home">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>
      <div className="home" id="home">
        <div className="social">
          <a href="https://github.com/OscarYopan" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/oscar-luis-yopan-95139b27/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/oscaryopan/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>        
          </a>
          <a href="https://api.whatsapp.com/send?phone=+5548991006117&text=Hello!." target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp"></i>        
          </a>
        </div>
        <div className="me">
          <h1 className="title">Oscar Yopan</h1>
          <h3 className="subtitle">Frontend Developer</h3>
          <p className="presentation">Hello! I am a developer student, making my first steps in this amazing universe, always looking for the next level.</p>
          <button className="button"><a href="https://api.whatsapp.com/send?phone=+5547996048141&text=Hello!." target="_blank" rel="noreferrer">Contact</a></button>
        </div>
        <div className="oscar-pic"></div>
      </div>
    </div>
  )  
}

export default Home
