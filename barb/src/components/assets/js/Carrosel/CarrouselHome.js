import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../img/CarouselImage/image1.png';
import image2 from '../../img/CarouselImage/image2.png';
import image3 from '../../img/CarouselImage/image3.png';

import "../../css/CarrouselHome.css"

function CarrouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3>Agendamentos</h3>
          <p>Tela para agendamentos do dias</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Cadastro de Agendamento</h3>
          <p>Tela agendamentos de cliente</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={image3} alt="Third slide" />
        <Carousel.Caption>
        <h3>Confirmação do Agendamento</h3>
          <p>Tela de autenticação do clientes</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselHome;