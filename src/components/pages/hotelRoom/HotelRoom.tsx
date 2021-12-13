import { CardNumber } from '../../common/cardNumber/CardNumber';
import { HeadingBlock } from '../../common/heading-block/HeadingBlock';
import { Reservation } from '../../common/reservation/Reservation';
import { BlockTitle } from '../../common/title/BlockTitle';

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
    url: 'http://hotelstrigino.ru/images/products/product_01.jpg',
    cost: 3300,
  },
  {
    title: '«Семейный»',
    desc: 'Трехкомнатный номер площадь: 70 м2, размещение семьи из 4 человек, двуспальная кровать и две раздельные односпальные кровати, плазменный телевизор, телефон, ванная, туалетная комната, чайник, фен, холодильник, халат, тапочки, косметические принадлежности, балкон',
    url: 'http://hotelstrigino.ru/images/products/product_02.jpg',
    cost: 3800,
  },
  {
    title: '«Бизнес»',
    desc: 'Двухкомнатный номер, двуспальная кровать, письменный стол, плазменный телевизор, телефон, ванная, туалетная комната, чайник, фен, холодильник, халат, тапочки, косметические принадлежности, балкон',
    url: 'http://hotelstrigino.ru/images/products/product_03.jpg',
    cost: 2300,
  },
  {
    title: '«Свадебный»',
    desc: 'Двухкомнатный номер, Бело-бордовый дизайн интерьера создаст романтическую атмосферу, двуспальная кровать, плазменный телевизор, телефон, ванная, туалетная комната, чайник, фен, холодильник, халат, тапочки, косметические принадлежности, балкон',
    url: 'http://hotelstrigino.ru/images/products/17-dlya-sajta2.jpg',
    cost: 2300,
  },
  {
    title: '«Стандарт DOUBLE»',
    desc: 'Двухкомнатный номер, двуспальная кровать, плазменный телевизор, телефон, ванная, туалетная комната, набор полотенец, косметические принадлежности, балкон',
    url: 'http://hotelstrigino.ru/images/products/doub-1.JPG',
    cost: 2300,
  },
  {
    title: '«Стандарт TWIN»',
    desc: 'Две односпальные кровати, плазменный телевизор, телефон, ванная, туалетная комната, набор полотенец, косметические принадлежности, балкон',
    url: 'http://hotelstrigino.ru/images/products/product_06.2.JPG',
    cost: 2300,
  },
];

export const HotelRoom = () => {
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
