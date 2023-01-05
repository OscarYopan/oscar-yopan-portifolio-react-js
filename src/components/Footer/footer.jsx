import './footer.css'

function Footer() {
  return(
    <div className='Footer'>
      <div className="footer" id="footer">
        <div id="logo">
          <h3 className="logo"><a href="index.html">Oscar Yopan</a></h3>
        </div>
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
      </div>
    </div>
  )
}

export default Footer