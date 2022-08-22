import ListaProyectos from "./ListaProyectos/ListaProyectos";
import "./proyectos.css"

export default function Proyectos() {


  return (
    <div id="proyectos">
      <svg viewBox="0 0 1440 320" id="wave">
        <path d="M0,128L120,112C240,96,480,64,720,48C960,32,1200,32,1320,32L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
      </svg>
      <h2 className="proyectos__tittle">
      <span id="p">P</span><span id="r">R</span><span id="o">O</span><span id="y">Y</span><span id="e">E</span><span id="c">C</span><span id="t">T</span><span id="o">O</span><span id="s">S</span>
      </h2>
      <div className="proyectos__container">
        <ListaProyectos/>
      </div>
    </div>
  );
}
