import { CardNumber } from '../../common/cardNumber/CardNumber';
import { HeadingBlock } from '../../common/heading-block/HeadingBlock';
import { Reservation } from '../../common/reservation/Reservation';
import { BlockTitle } from '../../common/title/BlockTitle';
import room1 from '../../../img/hotelRoom/Студио.jpg';
import room2 from '../../../img/hotelRoom/Семейный.jpg';
import room3 from '../../../img/hotelRoom/Бизнес.jpg';
import room4 from '../../../img/hotelRoom/Свадебный.jpg';
import room5 from '../../../img/hotelRoom/СтандартDOUBLE.jpg';
import room6 from '../../../img/hotelRoom/СтандартTWIN.jpg';

import './hotelRoom.scss';

const title = {
  title: 'ЛУЧШИЕ НОМЕРА ДЛЯ ВАС',
  description:
    'Отель «Стригино» предоставляет широкий перечень номеров для бизнеса и индивидуального отдыха',
};

const heading = {
  title: 'номера',
  photo: 'http://hotelstrigino.ru/assets/gallery/1/17.jpg',
};

export type RoomHotelType = {
  title: string;
  desc: string;
  url: string;
  cost: number;
};

const roomsHotel = [
  {
    title: '«Студио»',
    desc: 'Однокомнатный номер, современный дизайн, двуспальная кровать, плазменный телевизор, телефон, ванная, туалетная комната, чайник, фен, холодильник, халат, тапочки, косметические принадлежности, балкон',
    url: room1,
    cost: 3300,
  },
  {
    title: '«Семейный»',
    desc: 'Трехкомнатный номер площадь: 70 м2, размещение семьи из 4 человек, двуспальная кровать и две раздельные односпальные кровати, плазменный телевизор, телефон, ванная, туалетная комната, чайник, фен, холодильник, халат, тапочки, косметические принадлежности, балкон',
    url: room2,
    cost: 3800,
  },
  {
    title: '«Бизнес»',
    desc: 'Двухкомнатный номер, двуспальная кровать, письменный стол, плазменный телевизор, телефон, ванная, туалетная комната, чайник, фен, холодильник, халат, тапочки, косметические принадлежности, балкон',
    url: room3,
    cost: 2300,
  },
  {
    title: '«Свадебный»',
    desc: 'Двухкомнатный номер, Бело-бордовый дизайн интерьера создаст романтическую атмосферу, двуспальная кровать, плазменный телевизор, телефон, ванная, туалетная комната, чайник, фен, холодильник, халат, тапочки, косметические принадлежности, балкон',
    url: room4,
    cost: 2300,
  },
  {
    title: '«Стандарт DOUBLE»',
    desc: 'Двухкомнатный номер, двуспальная кровать, плазменный телевизор, телефон, ванная, туалетная комната, набор полотенец, косметические принадлежности, балкон',
    url: room5,
    cost: 2300,
  },
  {
    title: '«Стандарт TWIN»',
    desc: 'Две односпальные кровати, плазменный телевизор, телефон, ванная, туалетная комната, набор полотенец, косметические принадлежности, балкон',
    url: room6,
    cost: 2300,
  },
];

const HotelRoom = () => {
  const rooms = roomsHotel.map((item, i) => (
    <CardNumber key={i} data={item} index={i} />
  ));

  return (
    <>
      <main className="rooms rooms_pd">
        <HeadingBlock data={heading} />
        <Reservation />
        <BlockTitle data={title} />
        <div className="rooms-list-wrapper">{rooms}</div>
      </main>
    </>
  );
};

export default HotelRoom;
