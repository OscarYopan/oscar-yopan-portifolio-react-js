import './footer.css'

function Footer() {
  return(
    <div className='Footer'>
      <div className="footer" id="footer">
        <div className='footer-container'>
          <div id="logo" className='logo'>
            <h3 className="logo"><a href="#home">Oscar Yopan</a></h3>
          </div>
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
        </div>
        <p class="copy">&#169; <a href="https://github.com/OscarYopan" target={'_blank'} rel="noreferrer">Oscar Yopan</a>. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
