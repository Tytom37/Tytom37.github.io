import '../Nav/Nav.scss';
import profile from '../../assets/thitom_buligan.jpg';

function Nav() {
  return (
    <div>
        <div className="box">
          <nav className="navContainer">
            <img src={profile} alt="Thitom Angelo Buligan" className="profileImg" />
            <h1>Thitom Angelo Buligan</h1>
            <h2>Frontend / Web Developer</h2>
            <p>Passionate about frontend development and building interfaces that are both beautiful and functional.</p>             
          
            {/* <ul className="navLinks">
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
            </ul> */}
          </nav>
          <footer className="navFooter">
            <a href="https://github.com/Tytom37" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/thitom-angelo-buligan-95131a369/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </footer>
        </div>
    </div>
  )
}

export default Nav;