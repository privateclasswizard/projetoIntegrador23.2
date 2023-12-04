import Reacts from "react";
import logo from "../../icons/navalha.svg"
import { Link } from "react-router-dom";
import "../../css/HeaderLogoOn.css"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';



const HeaderLogoOn = () => {
    return (
      <>
      <Navbar expand="lg" className="navBarHeaderLogoOff">
      <Container>

      
        <Navbar.Brand >        
          <Link className="linksHeaderOn" to="/inicial">
            <img src={logo} className="logoheader"/>
        </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="Cadastros" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link className="linksHeaderOn" to="/registrarhorario">Cadastro Horarios</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link className="linksHeaderOn" to="/registrobarbeiro">Cadastro Barbeiros</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link className="linksHeaderOn" to="/relatorios">Relatorios de clientes </Link></NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title=" Notificações" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Notificações</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>

      </>
        
    )
}

export default HeaderLogoOn