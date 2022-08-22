import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Scroll from './components/Scroll/Scroll';
import About from './components/about/about';
import Proyectos from './components/Proyectos/Proyectos';
import { useEffect, useRef, useState } from 'react';



function App() {

  const [divHeight, setDivHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setDivHeight(ref.current.clientHeight);
  }, [window.scrollY]);

  useEffect(()=>{
    const colorPrincipal = getComputedStyle(document.documentElement).getPropertyValue('--color-principal');
  })
  function setColor(color){
    document.documentElement.style.setProperty('--color-principal', color)
  }
  return (
    <div className="App" ref={ref}>
      <Header color={setColor}/>
      <Home/>
      <About/>
      <Proyectos/>
      <Scroll clientHeight={divHeight}/>
    </div>
  );
}

export default App;
