import './skills.css'
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.js'

function Skills() {
  return(
    <div className='Skills'>
      <div className="skills" id="skills">
        <div className="title">
          <h1>Skills</h1>
        </div>
        <div className="container">
          <div className="skill">
            <h4>HTML</h4>
            <i className="fa-brands fa-html5"></i>
          </div>
          <div className="skill">
            <h4>CSS</h4>
            <i className="fa-brands fa-css3-alt"></i>
          </div>
          <div className="skill">
            <h4>JavaScript</h4>
            <i className="fa-brands fa-js"></i>
          </div>
          <div className="skill">
            <h4>React JS</h4>
            <i className="fa-brands fa-react"></i>
          </div>
          <div className="skill">
            <h4>Git</h4>
            <i className="fa-brands fa-git-alt"></i>
          </div>      
          <div className="skill">
            <h4>Github</h4>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default Skills