import PhotoHeader from '../assets/images/hotelRoom/hotelRoomHeader.jpg';
//standard-mini photos
import stM_1 from '../assets/images/hotelRoom/standardMini/standard-mini_1.jpg';
import stM_2 from '../assets/images/hotelRoom/standardMini/standard-mini_2.jpg';
import stM_3 from '../assets/images/hotelRoom/standardMini/standard-mini_3.jpg';
//standard photos
import st_1 from '../assets/images/hotelRoom/standard/standard_1.jpg';
import st_2 from '../assets/images/hotelRoom/standard/standard_2.jpg';
import st_3 from '../assets/images/hotelRoom/standard/standard_3.jpg';
import st_4 from '../assets/images/hotelRoom/standard/standard_4.jpg';
import st_5 from '../assets/images/hotelRoom/standard/standard_5_2.jpg';
//studio photos
import st1_1 from '../assets/images/hotelRoom/studio/studio_1_1.jpg';
import st1_2 from '../assets/images/hotelRoom/studio/studio_1_2.jpg';
import st1_3 from '../assets/images/hotelRoom/studio/studio_1_3.jpg';
import st1_4 from '../assets/images/hotelRoom/studio/studio_1_4.jpg';
import st2_1 from '../assets/images/hotelRoom/studio/studio_2_1.jpg';
import st2_2 from '../assets/images/hotelRoom/studio/studio_2_2.jpg';
import st2_3 from '../assets/images/hotelRoom/studio/studio_2_3.jpg';
import st2_4 from '../assets/images/hotelRoom/studio/studio_2_4.jpg';
import st3_1 from '../assets/images/hotelRoom/studio/studio_3_1.jpg';
import st3_2 from '../assets/images/hotelRoom/studio/studio_3_2.jpg';
import st3_3 from '../assets/images/hotelRoom/studio/studio_3_3.jpg';
import st3_4 from '../assets/images/hotelRoom/studio/studio_3_4.jpg';

//family photos
import fam_1 from '../assets/images/hotelRoom/family/family_1.jpg';
import fam_2 from '../assets/images/hotelRoom/family/family_2.jpg';
import fam_3 from '../assets/images/hotelRoom/family/family_3.jpg';
import fam_4 from '../assets/images/hotelRoom/family/family_4.jpg';

//wedding photos
import wed_1 from '../assets/images/hotelRoom/wedding/wedding_1.jpg';
import wed_2 from '../assets/images/hotelRoom/wedding/wedding_2.jpg';

//twin photos
import twin_1 from '../assets/images/hotelRoom/twin/twin_1.jpg';
import twin_2 from '../assets/images/hotelRoom/twin/twin_2.jpg';
import twin_3 from '../assets/images/hotelRoom/twin/twin_3.jpg';

export type RoomHotelType = {
  id: string;
  title: string;
  desc: string;
  descMore?: string;
  photos: string[];
  cost_1?: number;
  cost_2?: number;
  person?: number;
  square?: number;
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
      id: 'standard-mini',
      title: 'Стандарт однокомнатный',
      desc: 'Небольшой номер с двухспальной кроватью',
      descMore: ', санузлом с душевой кабиной',
      photos: [stM_1, stM_2, stM_3],
      cost_1: 1900,
      cost_2: 2000,
      person: 2,
      square: 18,
    },
    {
      id: 'standard',
      title: 'Стандарт двухкомнотный',
      desc: 'Двухкомнатный номер с одной двуспальной кроватью, включен легкий завтрак',
      photos: [st_1, st_2, st_3, st_4, st_5],
      cost_1: 2300,
      cost_2: 2500,
      person: 3,
      square: 26,
    },
    {
      id: 'studio_1',
      title: 'Студио',
      desc: 'Просторный однокомнатный дизайнерский номер с оригинальной мебелью, включен легкий завтрак',
      photos: [st1_1, st1_2, st1_3, st1_4],
      cost_1: 3300,
      cost_2: 3500,
      person: 2,
      square: 35,
    },
    {
      id: 'studio_2',
      title: 'Студио',
      desc: 'Просторный однокомнатный дизайнерский номер с оригинальной мебелью, включен легкий завтрак',
      photos: [st2_1, st2_2, st2_3, st2_4],
      cost_1: 3300,
      cost_2: 3500,
      person: 2,
      square: 35,
    },
    {
      id: 'studio_3',
      title: 'Студио',
      desc: 'Просторный однокомнатный дизайнерский номер с оригинальной мебелью, включен легкий завтрак',
      photos: [st3_1, st3_2, st3_3, st3_4],
      cost_1: 3300,
      cost_2: 3500,
      person: 2,
      square: 35,
    },
    {
      id: 'family',
      title: 'Семейный',
      desc: 'Трехкомнатный номер площадью 70 м2, размещение семьи из 4 человек,  включен легкий завтрак',
      descMore:
        ', двуспальная кровать и две раздельные односпальные кровати, плазменный телевизор, телефон, ванная, туалетная комната, чайник, фен, холодильник, халат, тапочки, косметические принадлежности, балкон',
      photos: [fam_1, fam_2, fam_3, fam_4],
      cost_1: 3800,
      cost_2: 3800,
      person: 4,
      square: 70,
    },
    {
      id: 'wedding',
      title: 'Свадебный',
      desc: 'Двухкомнатный номер, бело-бордовый дизайн интерьера создаст романтическую атмосферу, включен легкий завтрак',
      photos: [wed_1, wed_2],
      cost_1: 2300,
      cost_2: 2500,
      person: 2,
      square: 28,
    },
    {
      id: 'twin',
      title: 'Стандарт TWIN',
      desc: 'Двухместный номер с двумя односпальными кроватями, включен легкий завтрак',
      descMore:
        ', плазменный телевизор, телефон, ванная, туалетная комната, набор полотенец, косметические принадлежности, балкон',
      photos: [twin_1, twin_2, twin_3],
      cost_1: 2600,
      cost_2: 2600,
      person: 2,
    },
  ],
};

export function getHotelRooms() {
  return hotelRoomsData;
}

export function getHotelRoom(value: string | undefined) {
  return hotelRoomsData.rooms.find((room) => room.id === value);
}
