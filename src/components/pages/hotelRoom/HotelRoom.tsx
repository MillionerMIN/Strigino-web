import { Carousels } from '../../common/carousels/Carousels';
import { BlockTitle } from '../../common/title/BlockTitle';

const title = {
  title: 'ЛУЧШИЕ НОМЕРА ДЛЯ ВАС',
  description:
    'Отель «Стригино» предоставляет широкий перечень номеров для бизнеса и индивидуального отдыха',
};

const roomsPhoto = [
  { url: 'http://hotelstrigino.ru/assets/gallery/3/52.jpg' },
  { url: 'http://hotelstrigino.ru/assets/gallery/3/53.JPG' },
  { url: 'http://hotelstrigino.ru/assets/gallery/3/53.JPG' },
];

export const HotelRoom = () => {
  return (
    <>
      <main className="main">
        <Carousels data={roomsPhoto} />
        <BlockTitle data={title} />
        <div className="rooms-list-wrapper">
          <div className="container"></div>
        </div>
      </main>
    </>
  );
};
