import './about.css'

function About() {
  return (
    <div className='About'>
        <div className="about" id="about">
          <h1 className="title">About me</h1>
          <h3 className="subtitle">My introduction</h3>

          <div className="container">
            <div className="oscar-photo"></div>
            <div className="me">
              <p className="presentation">I have been working in another area for the last 11 years, but that was never my dream and that was an a frustation for me. Since I discover the developing, I feel mysel realized, in many times during my studies and pratices, feel not working or studing, I'm having fun!</p>
              <button className="button">
                <a 
                href="../img/resume.pdf"
                target="_blank" 
                download="ResumeOscarYopan">
                  Dowload CV
                </a>
              </button>
            </div>
          </div>

        </div>
    </div>
  )  
}

export default About