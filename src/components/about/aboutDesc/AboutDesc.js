import perfil from "../../../Perfil.jpg";
import { FaEnvelope } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function AboutDesc() {
  function onEmailClick() {
    window.open("mailto:facundo.adeluca@gmail.com");
  }
  function onGhClick() {
    window.open("https://github.com/facudeluca");
  }
  function onLiClick() {
    window.open("https://www.linkedin.com/in/facundo-deluca/");
  }
  return (
    <div className="about__desc">
      <img src={perfil} alt="foto de perfil" width="200px" />
      <p>
        ¡Hola! Soy <span>Facundo De Luca</span>, un desarrollador de software radicado en
        Buenos Aires, Argentina. Disfruto creando cosas que viven en Internet,
        ya sean sitios web, aplicaciones o cualquier otra cosa. Mi objetivo
        siempre es crear productos que brinden experiencias de rendimiento
        perfectas junto con <span>interfaces de usuario atractivas.</span>
      </p>
      <nav>
        <ul>
          <li>
            <a to="" onClick={onEmailClick}>
              <FaEnvelope className="i" />
              <p>Email</p>
            </a>
          </li>
          <li>
            <a to="" onClick={onGhClick}>
              <FaGithubSquare className="i" />
              <p>Github</p>
            </a>
          </li>
          <li>
            <a to="/" onClick={onLiClick}>
              <FaLinkedin className="i" />
              <p>Linkedin</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AboutDesc;
