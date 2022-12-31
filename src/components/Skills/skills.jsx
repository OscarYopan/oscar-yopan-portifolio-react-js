import './skills.css'
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.js'

function Skills() {
  return(
    <div className='Skills'>
      <div class="skills" id="skills">
        <div class="title">
          <h1>Skills</h1>
        </div>
        <div class="container">
          <div class="skill">
            <h4>HTML</h4>
            <i class="fa-brands fa-html5"></i>
          </div>
          <div class="skill">
            <h4>CSS</h4>
            <i class="fa-brands fa-css3-alt"></i>
          </div>
          <div class="skill">
            <h4>JavaScript</h4>
            <i class="fa-brands fa-js"></i>
          </div>
          <div class="skill">
            <h4>React JS</h4>
            <i class="fa-brands fa-react"></i>
          </div>
          <div class="skill">
            <h4>Git</h4>
            <i class="fa-brands fa-git-alt"></i>
          </div>      
          <div class="skill">
            <h4>Github</h4>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default Skills