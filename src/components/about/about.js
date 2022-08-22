import "./about.css";
import AboutDesc from "./aboutDesc/AboutDesc";
import AboutSkills from "./aboutSkills/AboutSkills";

function About() {

  return (
    <div id="about">
      <div className="aboutTittle">
        <h2>
          <span id="ss">S</span>
          <span id="oo">O</span>
          <span id="bb">B</span>
          <span id="rr">R</span>
          <span id="ee">E</span>
          <span id="mm">M</span>
          <span id="ii">I</span>
        </h2>
      </div>
      <div className="aboutContainer">
        <AboutDesc/>
        <AboutSkills/>
      </div>
    </div>
  );
}

export default About;
