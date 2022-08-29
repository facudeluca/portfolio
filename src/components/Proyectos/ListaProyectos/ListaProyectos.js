import React,{ useState, useEffect, useRef, useCallback } from "react";
import "./listaProyectos.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoIosOpen } from "react-icons/io";
import {BsChevronCompactLeft} from "react-icons/bs"
import {BsChevronCompactRight} from "react-icons/bs"
import duck from "../../../duck.png";
import pastas from "../../../pastas-damiano.png";
import galicia from "../../../galicia.png";
import Tilt from "react-parallax-tilt";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Pagination } from "swiper";
import SwiperCore from "swiper/core";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


SwiperCore.use([Navigation]);
   



function ListaProyectos() {

  function getWindowDimensions() {
    const width = window.innerWidth
    return {
        width,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [lessWidth, setLessWidth]=useState(false)

useEffect(()=>{
  if(windowDimensions.width < 1024){
    setLessWidth(true)
  }else{
    setLessWidth(false)
  }
},[lessWidth])


  


  const sliderRef=useRef(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="listaProyectos">
    <button  onClick={handlePrev}><BsChevronCompactLeft className="flechas"/></button>
      <Swiper           
            effect={"coverflow"}  
            slidesPerView={lessWidth ? 1 : 3}
            spaceBetween={0}
            loop={true}
            initialSlide={0}
            centeredSlides={true}
            modules={[EffectCoverflow, Pagination]}
            pagination={{
              dynamicBullets:true
            }}
            coverflowEffect={{
              rotate: -20,
              stretch: -250,
              depth: 250,
              modifier: 1,
              slideShadows: false,
              scale:.9
            }}
           ref={sliderRef}>
        <SwiperSlide>
        <Tilt
        className="tilt card"
        perspective={500}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
      >
        <div className="imgCard">
          <div className="links">
            <div
              onClick={() => {
                window.open("https://github.com/facudeluca/duckHunt");
              }}
            >
              <FaGithubSquare className="i" />
              <p>Repo</p>
            </div>
            <div
              onClick={() => {
                window.open("https://facudeluca.github.io/duckHunt/");
              }}
            >
              <IoIosOpen className="i" />
              <p>Demo</p>
            </div>
          </div>
          <img src={duck} alt="Duck Hunt" width="350px" />
        </div>
        <div className="infoCard">
          <div className="cardName">
            <h2>DUCK HUNT GAME</h2>
            <p>Juego clásico de la consola Family Game.</p>
          </div>
          <div className="tecnologias">
            <h3>TECNOLOGÍAS USADAS:</h3>
            <div className="tecnologiasContainer">
              <div className="tech">
                <FaJsSquare className="js" />
                <h3>Javascript</h3>
              </div>
              <div className="tech">
                <AiFillHtml5 className="html" />
                <h3>HTML</h3>
              </div>
              <div className="tech">
                <FaCss3Alt className="css" />
                <h3>CCS3</h3>
              </div>
              <div className="tech">
                <FaSass className="sass" />
                <h3>SASS</h3>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
        </SwiperSlide>
        <SwiperSlide>
        <Tilt
        className="tilt card"
        perspective={500}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
      >
        <div className="imgCard">
          <div className="links">
            <div
              onClick={() => {
                window.open("https://github.com/facudeluca/pastas-damiano");
              }}
            >
              <FaGithubSquare className="i" />
              <p>Repo</p>
            </div>
            <div
              onClick={() => {
                window.open("https://facudeluca.github.io/pastas-damiano/");
              }}
            >
              <IoIosOpen className="i" />
              <p>Demo</p>
            </div>
          </div>
          <img src={pastas} alt="Pastas Damiano" width="350px" />
        </div>
        <div className="infoCard">
          <div className="cardName">
            <h2>PASTAS DAMIANO</h2>
            <p>Proyecto de página web para un emprendimiento de comidas</p>
          </div>
          <div className="tecnologias">
            <h3>TECNOLOGÍAS USADAS:</h3>
            <div className="tecnologiasContainer">
              <div className="tech">
                <AiFillHtml5 className="html" />
                <h3>HTML</h3>
              </div>
              <div className="tech">
                <FaCss3Alt className="css" />
                <h3>CCS3</h3>
              </div>
              <div className="tech">
                <FaSass className="sass" />
                <h3>SASS</h3>
              </div>
              <div className="tech">
                <FaBootstrap className="bootstrap" />
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
        </SwiperSlide>
        <SwiperSlide>
        <Tilt
        className="tilt card"
        perspective={500}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
      >
        <div className="imgCard">
          <div className="links">
            <div
              onClick={() => {
                window.open("https://github.com/facudeluca/proyectoReact-DeLuca");
              }}
            >
              <FaGithubSquare className="i" />
              <p>Repo</p>
            </div>
            <div
              onClick={() => {
                window.open("https://distribuidoragalicia.netlify.app/");
              }}
            >
              <IoIosOpen className="i" />
              <p>Demo</p>
            </div>
          </div>
          <img src={galicia} alt="Pastas Damiano" width="350px" />
        </div>
        <div className="infoCard">
          <div className="cardName">
            <h2>ECOMMERCE</h2>
            <p>Proyecto de e-commerce para un emprendimiento de alimentos</p>
          </div>
          <div className="tecnologias">
            <h3>TECNOLOGÍAS USADAS:</h3>
            <div className="tecnologiasContainer">
              <div className="tech">
                <FaReact className="react" />
                <h3>REACT</h3>
              </div>
              <div className="tech">
                <AiFillHtml5 className="html" />
                <h3>HTML</h3>
              </div>
              <div className="tech">
                <FaCss3Alt className="css" />
                <h3>CCS3</h3>
              </div>
              <div className="tech">
                <FaBootstrap className="bootstrap" />
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
        </SwiperSlide>
      </Swiper>
      <button  onClick={handleNext}><BsChevronCompactRight className="flechas"/></button>
    </div>
  );
}

export default ListaProyectos;
