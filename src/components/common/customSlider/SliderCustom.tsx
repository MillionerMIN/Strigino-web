import './sliderCustom.scss';
import Slider from 'react-slick';
import { useRef } from 'react';

function NextArrow(props: any) {
  return (
    <div className="arrows-arrowRight next-arrow" onClick={props.onClick} />
  );
}

function PrevArrow(props: any) {
  return (
    <div className="arrows-arrowLeft prev-arrow" onClick={props.onClick} />
  );
}

type SliderCustomType = {
  photos: string[] | undefined;
};

const SliderCustom = (props: SliderCustomType) => {
  const { photos } = props;
  const slickRef = useRef<any>(null);
  const settings = {
    autoplay: true,
    fade: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => slickRef.current.slickNext()} />,
    prevArrow: <PrevArrow onClick={() => slickRef.current.slickNext()} />,
  };
  //@ts-ignore
  const content = photos.map((photo, i) => (
    <div key={i}>
      <img src={photo} alt={`photo_${i}`} />
    </div>
  ));
  return (
    <div className="container">
      <Slider ref={slickRef} {...settings}>
        {content}
      </Slider>
    </div>
  );
};

export default SliderCustom;
