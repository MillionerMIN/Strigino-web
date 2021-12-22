import SwipeToSlide from '../../../common/slider/SwipeToSlide';
import { BlockTitle } from '../../../common/title/BlockTitle';
import './specialBlock.scss';

const title = {
  title: 'Акции и спецпредложения',
  description:
    'Мы предлагаем широкий спектр услуг как для бизнеса,так и для индивидуального отдыха',
  colorTitle: 'title_white',
};

const arrayShares = [
  {
    img: 'https://cf.bstatic.com/images/hotel/max600/607/60716065.jpg',
    title: 'ljbdfbdfkbh',
  },
  {
    img: 'https://cf.bstatic.com/images/hotel/max600/607/60716065.jpg',
    title: 'ljbdfbdfkbh',
  },
  {
    img: 'https://cf.bstatic.com/images/hotel/max600/607/60716065.jpg',
    title: 'ljbdfbdfkbh',
  },
  {
    img: 'https://cf.bstatic.com/images/hotel/max600/607/60716065.jpg',
    title: 'ljbdfbdfkbh',
  },
  {
    img: 'https://cf.bstatic.com/images/hotel/max600/607/60716065.jpg',
    title: 'ljbdfbdfkbh',
  },
  {
    img: 'https://cf.bstatic.com/images/hotel/max600/607/60716065.jpg',
    title: 'ljbdfbdfkbh',
  },
];

const SpecialBlock = () => {
  return (
    <div className="special-block special-block_pd">
      <div className="container">
        <BlockTitle data={title} />
        <div className="special-block__slider">
          <SwipeToSlide />
        </div>
        <div className="special-block__button">
          <div className="button button_text-white button_center">
            Смотреть все
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialBlock;
