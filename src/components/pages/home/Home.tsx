import { CardNumber } from '../../cardNumber/CardNumber';
import { Carousels } from '../../common/carousels/Carousels';
import { Reservation } from '../../common/reservation/Reservation';
import { BlockTitle } from '../../common/title/BlockTitle';

import './home.scss';

export const Home = () => {
  const arrayPhoto = [
    { url: 'http://hotelstrigino.ru/assets/gallery/3/52.jpg' },
    { url: 'http://hotelstrigino.ru/assets/gallery/3/53.JPG' },
    { url: 'http://hotelstrigino.ru/assets/gallery/3/53.JPG' },
  ];

  return (
    <div className="main">
      <Carousels data={arrayPhoto} />
      <Reservation />
      <BlockTitle />
      <div className="main__content">
        <CardNumber />
      </div>
    </div>
  );
};
