import { Carousel } from 'react-bootstrap';
import './carousels.scss';

type CarouselsPropsType = {
  data: { url: string; alt: string }[];
};

export const Carousels = (props: CarouselsPropsType) => {
  const { data } = props;
  const carouselItems = data.map((item, i) => (
    <Carousel.Item key={i}>
      <img
        className="d-block w-100 carousels__img"
        src={item.url}
        alt={item.alt}
      />
    </Carousel.Item>
  ));

  return (
    <Carousel className="carousels" interval={5000}>
      {carouselItems}
    </Carousel>
  );
};
