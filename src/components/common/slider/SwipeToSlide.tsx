import Slider from 'react-slick';
import { useRef } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './swipeToSlide.scss';

const SampleNextArrow = (props: any) => {
  return <div className="arrows-arrowRight" onClick={props.onClick}></div>;
};

const SamplePrevArrow = (props: any) => {
  return <div className="arrows-arrowLeft" onClick={props.onClick}></div>;
};

type SwipeToSlideType = {};

const SwipeToSlide = (props: SwipeToSlideType) => {
  const slickRef = useRef<any>(null);
  const settings = {
    className: 'center sliderCustom',
    autoplay: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow onClick={() => slickRef.current.slickNext()} />,
    prevArrow: <SamplePrevArrow onClick={() => slickRef.current.slickPrev()} />,
  };
  return (
    <div>
      <Slider ref={slickRef} {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SwipeToSlide;
