import PhotoHeader from '../assets/images/hotelRoom/hotelRoomHeader.jpg';
import room1 from '../assets/img/hotelRoom/Студио.jpg';
import room2 from '../assets/img/hotelRoom/Семейный.jpg';
import room3 from '../assets/img/hotelRoom/Бизнес.jpg';
import room4 from '../assets/img/hotelRoom/Свадебный.jpg';
import room5 from '../assets/img/hotelRoom/СтандартDOUBLE.jpg';
import room6 from '../assets/img/hotelRoom/СтандартTWIN.jpg';

export type RoomHotelType = {
  id: string;
  title: string;
  desc: string;
  image: string;
  cost: number;
};

type HotelRoomsDataType = {
  header: { title: string; photo: string };
  title: { title: string; description: string };
  rooms: RoomHotelType[];
};

const hotelRoomsData: HotelRoomsDataType = {
  header: {
    title: 'номера',
    photo: PhotoHeader,
  },

  title: {
    title: 'ЛУЧШИЕ НОМЕРА ДЛЯ ВАС',
    description:
      'Отель «Стригино» предоставляет широкий перечень номеров для бизнеса и индивидуального отдыха',
  },

  rooms: [
    {
      id: 'studio',
      title: 'Студио',
      desc: 'Просторный однокомнатный дизайнерский номер с оригинальной мебелью.',
      image: room1,
      cost: 3300,
    },
    {
      id: 'family',
      title: 'Семейный',
      desc: 'Трехкомнатный номер площадь: 70 м2, размещение семьи из 4 человек, двуспальная кровать и две раздельные односпальные кровати, плазменный телевизор, телефон, ванная, туалетная комната, чайник, фен, холодильник, халат, тапочки, косметические принадлежности, балкон',
      image: room2,
      cost: 3800,
    },
    {
      id: 'business',
      title: 'Бизнес',
      desc: 'Двухкомнатный номер, двуспальная кровать, письменный стол, плазменный телевизор, телефон, ванная, туалетная комната, чайник, фен, холодильник, халат, тапочки, косметические принадлежности, балкон',
      image: room3,
      cost: 2300,
    },
    {
      id: 'wedding',
      title: 'Свадебный',
      desc: 'Двухкомнатный номер, Бело-бордовый дизайн интерьера создаст романтическую атмосферу, двуспальная кровать, плазменный телевизор, телефон, ванная, туалетная комната, чайник, фен, холодильник, халат, тапочки, косметические принадлежности, балкон',
      image: room4,
      cost: 2300,
    },
    {
      id: 'double',
      title: 'Стандарт DOUBLE',
      desc: 'Двухкомнатный номер, двуспальная кровать, плазменный телевизор, телефон, ванная, туалетная комната, набор полотенец, косметические принадлежности, балкон',
      image: room5,
      cost: 2300,
    },
    {
      id: 'twin',
      title: 'Стандарт TWIN',
      desc: 'Две односпальные кровати, плазменный телевизор, телефон, ванная, туалетная комната, набор полотенец, косметические принадлежности, балкон',
      image: room6,
      cost: 2300,
    },
  ],
};

export function getHotelRooms() {
  return hotelRoomsData;
}

export function getHotelRoom(value: string | undefined) {
  return hotelRoomsData.rooms.find((room) => room.id === value);
}
