import SwipeToSlide from '../../../components/common/slider/SwipeToSlide';
import { BlockTitle } from '../../../components/common/title/BlockTitle';
import spat1 from '../../../assets/img/home/specialBlock1.jpg';
import spat2 from '../../../assets/img/home/specialBlock2.jpg';
import spat3 from '../../../assets/img/home/specialBlock3.jpg';
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
    img: spat1,
    title: 'Зимний weekend',
    desc: 'Специальное предложение на зимние выходные',
  },
  {
    img: spat2,
    title: 'ljbdfbdfkbh',
  },
  {
    img: spat3,
    title: 'ljbdfbdfkbh',
  },
  {
    img: spat1,
    title: 'ljbdfbdfkbh',
  },
  {
    img: spat2,
    title: 'ljbdfbdfkbh',
  },
  {
    img: spat3,
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
    <div className="special-block">
      <div className="special-block__bg">
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
    </div>
  );
};

export default SpecialBlock;
