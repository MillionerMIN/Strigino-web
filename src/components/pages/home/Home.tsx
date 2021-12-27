import { Carousels } from '../../common/carousels/Carousels';
import { Reservation } from '../../common/reservation/Reservation';
import { BlockTitle } from '../../common/title/BlockTitle';
import { CustomMap } from '../../customMap/CustomMap';
import Navigation from './navigation/Navigation';

import './home.scss';
import SpecialBlock from './specialBlock/SpecialBlock';

const title = {
  title: 'ЧТО МЫ ВАМ ПРЕДЛАГАЕМ',
  description:
    'Мы предлагаем широкий спектр услуг как для бизнеса,так и для индивидуального отдыха',
};

const mapTitle = {
  title: 'Как добраться',
  description:
    'Проще всего до отеля добраться на автомобиле, если Вы прибыли  в аэропорт или на ж/д вокзал, мы поможем организовать Вам встречу',
};
const arrayPhoto = [
  { url: 'https://cf.bstatic.com/images/hotel/max600/940/94033968.jpg' },
  { url: 'https://cf.bstatic.com/images/hotel/max600/607/60716065.jpg' },
  { url: 'https://cf.bstatic.com/images/hotel/max600/168/168167243.jpg' },
];

export const Home = () => {
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
