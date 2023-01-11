import './mobileMenu.css'

function MobileMenu() { 
  return (
    <div className="MobileMenu">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />      
      </head>

      <div className='mobile'>
        <button className='toggle'><i class="fa-solid fa-bars"></i></button>
        <div className="mobile-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skilss">Skills</a></li>
            <li><a href="#portifolio">Portifolio</a></li>
          </ul>
        </div>
      </div>
    </div>
  )  
}

export default MobileMenu