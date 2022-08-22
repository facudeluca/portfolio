import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./header.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from "react";

function Header({ color }) {
  
  const [expanded, setExpanded] = useState(false)

  return (
    <>
    <Navbar expand="xl" expanded={expanded} fixed="top" className="header__navbar">
      <Container>
        <Link
          className="navbar-logo"
          to="home"
          spy={false}
          smooth={true}
          offset={0}
          duration={500}
        >
          FA <br />
          DL <span id="puntos">:</span>
        </Link>

        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" className="nav__bars">
          {" "}
          <FaBars />{" "}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link onClick={() => setExpanded(false)}
              className="a_nav"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <span className="line__link"></span>Acerca de
            </Link>
            <Link onClick={() => setExpanded(false)}
              className="a_nav"
              to="proyectos"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <span className="line__link"></span>Proyectos
            </Link>
            <Link onClick={() => setExpanded(false)}
              className="a_nav"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <span className="line__link"></span>Contacto
            </Link>
            <OverlayTrigger
          trigger="click" 
          key="bottom"
          placement="bottom"
          rootClose
          overlay={
            <Popover id={`popover-positioned-bottom`}>
              <Popover.Header as="h5">CAMBIAR COLOR</Popover.Header>
              <Popover.Body>
              <button className="colorChangeBtn red" onClick={() => color("red")}></button>
              <button className="colorChangeBtn yellow" onClick={() => color("#feda4e")}></button>
              <button className="colorChangeBtn lightblue" onClick={() => color("rgb(78, 204, 254)")}></button>
              <button className="colorChangeBtn purple" onClick={() => color("rgb(100, 32, 189)")}></button>
              <button className="colorChangeBtn green" onClick={() => color("rgb(133, 206, 24)")}></button>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary" id="changeButton"></Button>
        </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="navOverlay" onMouseDown={() => setExpanded(false)} style={{transform: expanded ? 'translateY(0) scale(1)':'', borderRadius: expanded? '0' : ''}}>

    </div>
    </>
  );
}

export default Header;
