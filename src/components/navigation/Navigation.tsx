import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './navigation.scss';
import '../../style/_arrows.scss';

const arrayItems = [
  {
    src: 'https://cf.bstatic.com/images/hotel/max600/112/112501370.jpg',
    title: 'Забронировать',
    to: '#',
  },
  {
    src: 'https://cf.bstatic.com/images/hotel/max600/940/94036155.jpg',
    title: 'Читать больше',
    to: '#',
  },
];

const Navigation = () => {
  const nextIcon = (
    <span
      aria-hidden="true"
      className="carousel-next-icon arrows-arrowRight"
    ></span>
  );
  const prevIcon = (
    <span
      aria-hidden="true"
      className="carousel-prev-icon arrows-arrowLeft"
    ></span>
  );

  const carouselItem = arrayItems.map((item, index) => (
    <Carousel.Item key={index}>
      <div className="navigation__item">
        <img className="navigation__image" src={item.src} alt="First slide" />
        <Carousel.Caption bsPrefix="navigation__info">
          <h3 className="title title_fs28">Комфортабельные номера</h3>
          <p className="text text_fs15 text_color">
            Номерной фонд гостиницы включает 67 просторных и роскошных номеров.
          </p>
          <NavLink
            to={item.to}
            title={item.title}
            className="button button_start button_hover link_color"
          >
            {item.title}
          </NavLink>
          <div className={'price price_leftBottom'}>
            от <span className="value text_fs26">2500</span>{' '}
            <span className="currency text_fs26">RUB</span>
          </div>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
  ));

  return (
    <div className="navigation navigation_pd">
      <div className="container">
        <Carousel
          interval={20000}
          nextIcon={nextIcon}
          prevIcon={prevIcon}
          bsPrefix="navigation__carousel"
        >
          {carouselItem}
        </Carousel>
      </div>
    </div>
  );
};

export default Navigation;
