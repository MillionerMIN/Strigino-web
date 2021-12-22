import Slider from 'react-slick';
import { useRef } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './swipeToSlide.scss';
import { NavLink } from 'react-router-dom';

const SampleNextArrow = (props: any) => {
  return (
    <div className="arrows-arrowRight hover" onClick={props.onClick}></div>
  );
};

const SamplePrevArrow = (props: any) => {
  return <div className="arrows-arrowLeft hover" onClick={props.onClick}></div>;
};

type SwipeToSlideType = {
  data: { img: string; title: string }[];
};

const SwipeToSlide = (props: SwipeToSlideType) => {
  const { data } = props;
  const slickRef = useRef<any>(null);
  const settings = {
    className: 'center slideCustom',
    autoplay: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow onClick={() => slickRef.current.slickNext()} />,
    prevArrow: <SamplePrevArrow onClick={() => slickRef.current.slickPrev()} />,
  };
  const cards = data.map((card, index) => (
    <div className="slideCustom__wrapper" key={index}>
      <div className="slideCustom__card">
        <NavLink to="#" className="link">
          <div className="slideCustom__image">
            <img src={card.img} alt={card.title} />
            <div className="slideCustom__button button button_center">
              Подробнее
            </div>
          </div>
          <div className="slideCustom__info">
            <div className="slideCustom__title title title_uppercase">
              {card.title}
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  ));
  return (
    <div>
      <Slider ref={slickRef} {...settings}>
        {cards}
      </Slider>
    </div>
  );
};

export default SwipeToSlide;
