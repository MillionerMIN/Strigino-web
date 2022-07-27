import Wedding from '../assets/images/restaurant/wedding.jpg';
import Anniversary from '../assets/images/restaurant/anniversary.jpg';
import OfficeParties from '../assets/images/restaurant/office-parties.jpg';
import Graduation from '../assets/images/restaurant/graduation.jpg';
import Birthday from '../assets/images/restaurant/birthday.jpg';
import SlideFourchette from '../assets/images/restaurant/slide-fourchette.jpg';
import PhotoHeader from '../assets/images/restaurant/restaurant.jpg';
import w_1 from '../assets/images/restaurant/wedding/w-1.jpg';
import w_2 from '../assets/images/restaurant/wedding/w-2.jpg';
import w_3 from '../assets/images/restaurant/wedding/w-3.jpg';
import w_4 from '../assets/images/restaurant/wedding/w-4.jpg';
import w_5 from '../assets/images/restaurant/wedding/w-5.jpg';
import w_6 from '../assets/images/restaurant/wedding/w-6.jpg';
import w_7 from '../assets/images/restaurant/wedding/w-7.jpg';
import w_8 from '../assets/images/restaurant/wedding/w-8.jpg';
import w_9 from '../assets/images/restaurant/wedding/w-9.jpg';
import w_10 from '../assets/images/restaurant/wedding/w-10.jpg';
import w_11 from '../assets/images/restaurant/wedding/w-11.jpg';
import w_12 from '../assets/images/restaurant/wedding/w-12.jpg';
import w_13 from '../assets/images/restaurant/wedding/w-13.jpg';
import w_14 from '../assets/images/restaurant/wedding/w-14.jpg';
import w_15 from '../assets/images/restaurant/wedding/w-15.jpg';
import w_16 from '../assets/images/restaurant/wedding/w-16.jpg';
import w_17 from '../assets/images/restaurant/wedding/w-17.jpg';
import w_18 from '../assets/images/restaurant/wedding/w-18.jpg';
import w_19 from '../assets/images/restaurant/wedding/w-19.jpg';
import w_20 from '../assets/images/restaurant/wedding/w-20.jpg';
import a_1 from '../assets/images/restaurant/anniversary/a-1.jpg';
import a_2 from '../assets/images/restaurant/anniversary/a-2.jpg';
import a_3 from '../assets/images/restaurant/anniversary/a-3.jpg';
import a_4 from '../assets/images/restaurant/anniversary/a-4.jpg';
import a_5 from '../assets/images/restaurant/anniversary/a-5.jpg';
import a_6 from '../assets/images/restaurant/anniversary/a-6.jpg';
import a_7 from '../assets/images/restaurant/anniversary/a-7.jpg';
import a_8 from '../assets/images/restaurant/anniversary/a-8.jpg';
import a_9 from '../assets/images/restaurant/anniversary/a-9.jpg';
import a_10 from '../assets/images/restaurant/anniversary/a-10.jpg';
import a_11 from '../assets/images/restaurant/anniversary/a-11.jpg';
import g_1 from '../assets/images/restaurant/graduation/g-1.jpg';
import g_2 from '../assets/images/restaurant/graduation/g-2.jpg';
import g_3 from '../assets/images/restaurant/graduation/g-3.jpg';
import g_4 from '../assets/images/restaurant/graduation/g-4.jpg';
import g_5 from '../assets/images/restaurant/graduation/g-5.jpg';
import g_6 from '../assets/images/restaurant/graduation/g-6.jpg';
import g_7 from '../assets/images/restaurant/graduation/g-7.jpg';
import g_8 from '../assets/images/restaurant/graduation/g-8.jpg';
import g_9 from '../assets/images/restaurant/graduation/g-9.jpg';
import g_10 from '../assets/images/restaurant/graduation/g-10.jpg';
import g_11 from '../assets/images/restaurant/graduation/g-11.jpg';
import g_12 from '../assets/images/restaurant/graduation/g-12.jpg';
import g_13 from '../assets/images/restaurant/graduation/g-13.jpg';
import g_14 from '../assets/images/restaurant/graduation/g-14.jpg';
import g_15 from '../assets/images/restaurant/graduation/g-15.jpg';
import o_1 from '../assets/images/restaurant/officeParties/o-1.jpg';
import o_2 from '../assets/images/restaurant/officeParties/o-2.jpg';
import o_3 from '../assets/images/restaurant/officeParties/o-3.jpg';
import o_4 from '../assets/images/restaurant/officeParties/o-4.jpg';
import o_5 from '../assets/images/restaurant/officeParties/o-5.jpg';
import o_6 from '../assets/images/restaurant/officeParties/o-6.jpg';
import o_7 from '../assets/images/restaurant/officeParties/o-7.jpg';
import o_8 from '../assets/images/restaurant/officeParties/o-8.jpg';
import o_9 from '../assets/images/restaurant/officeParties/o-9.jpg';
import f_1 from '../assets/images/restaurant/slideFourchette/f-1.jpg';
import f_2 from '../assets/images/restaurant/slideFourchette/f-2.jpg';
import f_3 from '../assets/images/restaurant/slideFourchette/f-3.jpg';
import f_4 from '../assets/images/restaurant/slideFourchette/f-4.jpg';
import f_5 from '../assets/images/restaurant/slideFourchette/f-5.jpg';
import f_6 from '../assets/images/restaurant/slideFourchette/f-6.jpg';
import f_7 from '../assets/images/restaurant/slideFourchette/f-7.jpg';
import f_8 from '../assets/images/restaurant/slideFourchette/f-8.jpg';

const restaurantData = {
  title: {
    title: 'ЛУЧШИЙ РЕСТОРАН ДЛЯ ВАС',
    description:
      'Позвольте себе испытать поистине изысканный вкус блюд русской, европейской и кавказской кухонь',
  },

  heading: {
    title: 'Ресторан',
    photo: PhotoHeader,
  },

  eventsRes: [
    {
      id: '',
      title: '«Свадьбы»',
      titleReserve: '«Свадебная церемония»',
      desc: '',
      photos: [
        Wedding,
        w_1,
        w_2,
        w_3,
        w_4,
        w_5,
        w_6,
        w_7,
        w_8,
        w_9,
        w_10,
        w_11,
        w_12,
        w_13,
        w_14,
        w_15,
        w_16,
        w_17,
        w_18,
        w_19,
        w_20,
      ],
      cost_1: 1800,
      reservation: {
        route: '/reservation-restaurant',
        titleReserve: '«Свадебная церемония»',
        present: {
          title: 'Наш предложение для бракосочетающихся',
          gifts: [
            'Просторный ресторан, с вместимостью до 80 гостей',
            'Номер для гостей с вашего банкета предоставляются с 15% скидкой',
            'Предоставляем номер для сбора невесты с 20% скидкой (бронировать зарание)',
            'При заказе от 2500 рублей с человека, чайный стол в подарок',
            'Профессионально обслуживающий персонал',
            'Подготовка и оформление праздника',
          ],
        },
      },
    },
    {
      id: '',
      title: '«Юбилеи, Дни рождения»',
      desc: '',
      photos: [
        Anniversary,
        a_1,
        a_2,
        a_3,
        a_4,
        a_5,
        a_6,
        a_7,
        a_8,
        a_9,
        a_10,
        a_11,
      ],
      // cost_1: 3800,
      reservation: {
        route: '/reservation-birthday',
        titleReserve: '«Юбилеи, Дни рождения»',
        present: {
          title: 'Наш предложение',
          gifts: [
            'Скидки на номера для гостей -10%',
            'Wi-Fi',
            'Скидки юбелярам 5% или 10%',
            'Музыкальное оборудование в аренду',
            'Оформление президиума',
          ],
        },
      },
    },
    {
      id: '',
      title: '«Корпоративы»',
      desc: '',
      photos: [OfficeParties, o_1, o_2, o_3, o_4, o_5, o_6, o_7, o_8, o_9],
      // cost_1: 2300,
      reservation: {
        route: '/reservation-office-parties',
        titleReserve: '«Корпоративы»',
        present: {
          title: 'Наш предложение',
          gifts: [
            'Скидки на номера -10%',
            'Возможна доставка на офис (заказывать зарание)',
          ],
        },
      },
    },
    {
      id: '',
      title: '«Выпускные»',
      desc: '',
      photos: [
        Graduation,
        g_1,
        g_2,
        g_3,
        g_4,
        g_5,
        g_6,
        g_7,
        g_8,
        g_9,
        g_10,
        g_11,
        g_12,
        g_13,
        g_14,
        g_15,
      ],
      // cost_1: 2300,
      reservation: {
        route: '/reservation-senior',
        titleReserve: '«Выпускные»',
        present: {
          title: 'Наш предложение',
          gifts: [
            'Встреча рассвета на берегу реки Ока',
            'Отличная персональная скидка -50% от меню',
            'Индивидуальный подход',
          ],
        },
      },
    },
    {
      id: '',
      title: '«Детские праздники»',
      desc: '',
      photos: [Birthday],
      // cost_1: 2300,
      reservation: {
        route: '/reservation-children',
        titleReserve: '«Детские праздники»',
        present: {
          title: 'Наш предложение',
          gifts: [
            'Просторный зал',
            'Сладкий стол',
            'Оформление фото зоны',
            'Пригласим аниматора',
            'Световое сопровождение',
          ],
        },
      },
    },
    {
      id: '',
      title: '«Фуршеты, презентации»',
      desc: '',
      photos: [SlideFourchette, f_1, f_2, f_3, f_4, f_5, f_6, f_7, f_8],
      // cost_1: 2300,
      reservation: {
        route: '/reservation-buffet',
        titleReserve: '«Фуршеты, презентации»',
        present: {
          title: 'Наш предложение',
          gifts: [
            'Возможность проведения в двух залах(ресторан на 80 мест, конференц зал на 25 мест)',
            'Бизнес-ланч',
            'Кофе брейк',
            'Wi-fi',
            'Индивидуальные скидки на размещения гостей в отеле',
          ],
        },
      },
    },
  ],
};

export function getRestaurantData() {
  return restaurantData;
}
