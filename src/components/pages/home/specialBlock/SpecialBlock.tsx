import SwipeToSlide from '../../../common/slider/SwipeToSlide';
import { BlockTitle } from '../../../common/title/BlockTitle';
import SpecialCard from './specialCard/SpecialCard';
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
    title: 'Зимний weekend',
    desc: 'Специальное предложение на зимние выходные',
  },
  {
    img: 'https://cf.bstatic.com/images/hotel/max600/940/94036158.jpg',
    title: 'ljbdfbdfkbh',
  },
  {
    img: 'http://hotelstrigino.ru/assets/cache_image/assets/gallery/4/86_398x275_70a.jpg',
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
  const widthWindow = window.screen.width;

  const content =
    widthWindow < 1199.98 ? (
      <SpecialCard items={arrayShares} />
    ) : (
      <div className="special-block__slider">
        <SwipeToSlide data={arrayShares} />
      </div>
    );

  return (
    <div className="special-block special-block_pd">
      <div className="container">
        <BlockTitle data={title} />
        {content}
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
