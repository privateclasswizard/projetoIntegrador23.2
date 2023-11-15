import Reacts from "react";
import navalha from '../components/assets/icons/navalha.svg'
import '../components/assets/css/Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <header>
          <nav className="navbar">
            <div className="divnavbarlogo">
              <Link to="/">
              <img src={navalha} className="imgnavbar" alt="logo" />
              </Link>
            </div>
            <div className="divnavbar">
            <Link to="/login"> 
              <a>LOGIN</a>
            </Link>

            </div>
          </nav>
        </header>
        <main id="Tela">
  
          <section className="container-fluid section1"></section>
        </main>
      </>
        
    )
}

export default Home