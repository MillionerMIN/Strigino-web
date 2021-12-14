import { Carousels } from '../../common/carousels/Carousels';
import { Reservation } from '../../common/reservation/Reservation';
import { BlockTitle } from '../../common/title/BlockTitle';
import { CustomMap } from '../../customMap/CustomMap';

import './home.scss';

const title = {
  title: 'ЧТО МЫ ВАМ ПРЕДЛАГАЕМ',
  description:
    'Мы предлагаем широкий спектр услуг как для бизнеса,так и для индивидуального отдыха',
};
const arrayPhoto = [
  { url: 'http://hotelstrigino.ru/assets/gallery/3/52.jpg' },
  { url: 'http://hotelstrigino.ru/assets/gallery/3/53.JPG' },
  { url: 'http://hotelstrigino.ru/assets/gallery/3/53.JPG' },
];

export const Home = () => {
  return (
    <main className="main">
      <Carousels data={arrayPhoto} />
      <Reservation />
      <BlockTitle data={title} />
      <CustomMap />
    </main>
  );
};
