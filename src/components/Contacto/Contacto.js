import React, { useEffect, useRef, useState } from "react";
import "./contacto.css";
import emailjs from "@emailjs/browser";
import SocialNav from "../SocialNav/SocialNav";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import {IoCheckmarkSharp} from "react-icons/io5"
import {BiErrorCircle} from "react-icons/bi"

function Contacto() {
  const form = useRef();
  const [smShow, setSmShow] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorEmail, setErrorEmail]=useState(true)
  const [validForm, setValidForm]=useState(false)
  const [haveText, setHaveText]=useState('')
  const sendEmail = (e) => {
    e.preventDefault();
    
    setTimeout(()=>{
      e.target.reset()
    }, 2000)

    emailjs
      .sendForm(
        "service_dt9sfsp",
        "template_2503win",
        form.current,
        "M00Aye2b7qg14dzNY"
      )
      .then((result) => {
        console.log(result.text);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setTimeout(() => {
          setSmShow(false);

        }, 4000);
      })
      .catch((err) => {
        setTimeout(() => {
          setSmShow(false);
          
        }, 2000)
        setErrorEmail(false)
        console.log(err);
      })
      .finally(() => {
        setSmShow(true);
      });
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError(true);
    } else {
      setError(false);
    }

    setMessage(event.target.value);
  };

  useEffect(() => {
    if(haveText != '' && error == false && message != ''){
      setValidForm(true)
    } else { 
      setValidForm(false)
    }
  }, [haveText, error, message])
  



  return (
    <div id="contact">
      <svg viewBox="0 0 1440 320" id="wave" className="wave__up">
        <path d="M0,128L120,112C240,96,480,64,720,48C960,32,1200,32,1320,32L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
      </svg>

      <div className="contact__container">
        <h2 className="contact__tittle">
          <span id="c">C</span>
          <span id="o">O</span>
          <span id="n">N</span>
          <span id="t">T</span>
          <span id="a">A</span>
          <span id="c">C</span>
          <span id="t">T</span>
          <span id="o">O</span>
        </h2>
        <div className="contenidoForm">
          <div className="contenido1">
            <div>
              <h2>¡HABLEMOS!</h2>
              <p>
                {" "}
                Mi bandeja de entrada está <span>siempre</span> disponible.{" "}
                <br /> Podes dejarme tu mensaje con tu consulta, oferta,
                feedback o simplemente un saludo. <br /> Haré todo lo posible
                para responderte a la brevedad.
              </p>
            </div>
            <SocialNav />
          </div>
          <form ref={form} onSubmit={sendEmail} className="form">
            <label>Nombre</label>
            <input type="name" name="user_name" autoComplete="none" />
            <div className="email__div">
              <label>Email</label>{" "}
              <p style={{ display: error ? "block" : "none" }}>
                INTRODUCE UN EMAIL VÁLIDO
              </p>
            </div>
            <input
              type="email"
              name="user_email"
              id="email"
              onChange={handleChange}
            />
            <label>Mensaje</label>
            <textarea name="message" onChange={(event) => setHaveText(event.target.value)} />
            <input
              type="submit"
              value="ENVIAR"
              className="nav__button btn__form"
              style={{
                opacity: validForm ? "1" : ".2",
                pointerEvents: validForm ? "all" : "none",
              }}
            />
          </form>
        </div>
      </div>

      <svg viewBox="0 0 1440 320" className="wave__down">
        <path d="M0,128L120,112C240,96,480,64,720,48C960,32,1200,32,1320,32L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
      </svg>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Body>
          {loading?  <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>: <div className="checked"><IoCheckmarkSharp className="check"/> <h3>¡ENVIADO!</h3></div> }
          {errorEmail? '': <div className="error">
            <BiErrorCircle/>
            <h3>Ha ocurrido un error</h3>
          </div>}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Contacto;
