import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { FaNode } from "react-icons/fa";

function AboutSkills() {
  return (
    <div className="about__skills">
      <h2>SKILLS <span/></h2>
      <div className="skillContainer">
      <div className="skill html">
        <AiFillHtml5/>
        <h3>HTML5</h3>
      </div>
      <div className="skill css">
        <FaCss3Alt/>
        <h3>CSS3</h3>
      </div>
      <div className="skill javascript">
        <FaJsSquare/>
        <h3>javascript</h3>
      </div>
      <div className="skill react">
        <FaReact/>
        <h3>React Js</h3>
      </div>
      <div className="skill node">
        <FaNode/>
        <h3>Node Js</h3>
      </div>
      <div className="skill sass">
        <FaSass/>
        <h3>SASS</h3>
      </div>
      <div className="skill bootstrap">
        <FaBootstrap/>
        <h3>Bootstrap</h3>
      </div>
      <div className="skill figma">
        <FiFigma/>
        <h3>Figma</h3>
      </div>
      </div>
    </div>
  );
}

export default AboutSkills;
