import './portifolio.css'

function Portifolio() {
  return(
    <div className='Portifolio'>
      <div className="portifolio" id="portifolio">
        <h1 className="title">Portifolio</h1>
        <p className="description">This is my personal portifolio, if you prefer, go to my <a href="https://github.com/OscarYopan" target="_blank" rel="noreferrer">Github</a> profile to see more.</p>    
        <div className="portifolio-container">
          <iframe src="https://oscaryopan.github.io/swiper-portifilio-pages/" frameborder="0" title='projects'>
            <p>Your browser does not support iframes.</p>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Portifolio