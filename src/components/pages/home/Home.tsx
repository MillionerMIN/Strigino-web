import { CardNumber } from '../../cardNumber/CardNumber';
import { Carousels } from '../../common/carousels/Carousels';
import { Reservation } from '../../common/reservation/Reservation';

import './home.scss';

export const Home = () => {
  const arrayPhoto = [
    { url: 'http://hotelstrigino.ru/assets/gallery/3/52.jpg' },
    { url: 'http://hotelstrigino.ru/assets/gallery/3/53.JPG' },
    { url: 'http://hotelstrigino.ru/assets/gallery/3/53.JPG' },
  ];

  return (
    <div>
      <Carousels data={arrayPhoto} />
      <Reservation />
      <div className="main-content">
        <CardNumber />
      </div>
    </div>
  );
};
