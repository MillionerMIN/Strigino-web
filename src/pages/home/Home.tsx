import './home.scss';

import { Carousels } from '../../components/common/carousels/Carousels';
import { Reservation } from '../../components/common/reservation/Reservation';
import { BlockTitle } from '../../components/common/title/BlockTitle';
import { CustomMap } from '../../components/customMap/CustomMap';
import Navigation from './navigation/Navigation';
import SpecialBlock from './specialBlock/SpecialBlock';
import Slider_1 from '../../assets/images/home/sliderHome_1.jpg';
import Slider_2 from '../../assets/images/home/sliderHome_2.jpg';
import Slider_3 from '../../assets/images/home/sliderHome_3.jpg';
import Slider_4 from '../../assets/images/home/sliderHome_4.jpg';
import setScrollTop from '../../components/common/scrollUp/setScrollTop';

const title = {
  title: 'ЧТО МЫ ВАМ ПРЕДЛАГАЕМ',
  description:
    'Мы предлагаем широкий спектр услуг как для бизнеса,так и для индивидуального отдыха',
};

const mapTitle = {
  title: 'Наше расположение',
  description:
    'Отель-ресторан "Стригино" располагается по координатам GPS: широта: 56°11′44.16″N (56.195599), долгота: 43°46′30.86″E (43.7752384)',
};
const arrayPhoto = [
  { url: Slider_1, alt: 'slider_1' },
  { url: Slider_2, alt: 'slider_2' },
  { url: Slider_3, alt: 'slider_3' },
  { url: Slider_4, alt: 'slider_4' },
];

export const Home = () => {
  setScrollTop();
  return (
    <main className="main">
      <Carousels data={arrayPhoto} />
      <Reservation />
      <BlockTitle data={title} />
      <Navigation />
      <SpecialBlock />
      <BlockTitle data={mapTitle} />
      <CustomMap />
    </main>
  );
};
