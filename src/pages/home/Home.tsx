import { Carousels } from '../../components/common/carousels/Carousels';
import { Reservation } from '../../components/common/reservation/Reservation';
import { BlockTitle } from '../../components/common/title/BlockTitle';
import { CustomMap } from '../../components/customMap/CustomMap';
import Navigation from './navigation/Navigation';
import SpecialBlock from './specialBlock/SpecialBlock';

import './home.scss';

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
