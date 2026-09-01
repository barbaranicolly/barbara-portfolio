import "./App.css";
import barbara from './assets/barbara.jpg'
function App(){
  return <div>
      <nav>
          <a>Home</a>
          <a>About me</a>
          <a>Experience</a>
          <a>Project</a>
      </nav>
    <div className="hero">
        <div className="animation">
            <div className="circle"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
        </div>
        <div className="hero-content">
      <h1>hi, <span>Barbara</span> here (:</h1>
      <p>Atualmente vivendo em Portugal, sou estudante de analise e desenvolvimento de sistemas,
          formada em gestão de recursos humanos. Aprimorando minhas habilidades em Java com foco em backend.
          Resolvi criar este projeto com intuito em desenvolver habilidades em JavaScript e react.</p>

            <p><botton> <a href="malito:barbaranicolly@hotmail.com">✉</a> </botton>
            </p>
        </div>
  </div>
    <section className="about">
        <div className="about-content">
        <h2>About me</h2>
        <p>Sou estudante de análise e desenvolvimento de sistemas, atualmente vivendo em Portugal. Tenho como principal foco java backend,
        tenho conhecimentos em Python, html, css, javaScript e react.
        </p></div>
        <div className="aboute-image">
            <img src={barbara} alt="Barbara"/>
        </div>
    </section>
      <div>
          <h2>skills</h2>
          <p>Java + spring boot</p>
          <p>python</p>
          <p>javascript + react</p>
          <p>html + css</p>
          <p>git + github</p>
      </div>
      <div>
          <h2>projects</h2>
          <p>TodoList - em andamento</p>
          <p>aplicação para criar, visualizar, concluir e excluir tarefas. </p>
          <p>Portfolio pessoal - este projeto</p>
      </div>
      <div>
          <h2>contact me</h2>
          <p> <a href="https://www.linkedin.com/in/barbaranicollyg/">LinkedIn</a>
          </p>
          <p> <a href="https://github.com/barbaranicolly">GitHub</a>
          </p>
          <p><a href="malito:barbaranicolly@hotmail.com">email</a>
      </p>
      </div>
  </div>
} export default App
