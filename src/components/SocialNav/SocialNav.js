import {FaEnvelope} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import "./social.css"

function SocialNav() {

    function onEmailClick() {
        window.open("mailto:facundo.adeluca@gmail.com");
    }
    function onGhClick(){
        window.open("https://github.com/facudeluca")
    }    
    function onLiClick(){
        window.open("https://www.linkedin.com/in/facundo-deluca/")
    }
  return (
    <nav className="social socialContact">
      <ul>
        <li>
          <a to='' onClick={onEmailClick}>
          <FaEnvelope className="i"/>
              <span className="socialspan" id="socialEmail"><span className="socialspanLine"></span><p>Email</p></span>
          </a>
        </li>
        <li>
          <a to="" onClick={onGhClick}>
            <FaGithubSquare className="i"/>
              <span className="socialspan" id="socialGh"><span className="socialspanLine"></span><p>Github</p></span>
          </a>
        </li>
        <li>
          <a to="/" onClick={onLiClick}>
            <FaLinkedin className="i"/>
              <span className="socialspan" id="socialLi"><span className="socialspanLine"></span><p>Linkedin</p></span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SocialNav;
