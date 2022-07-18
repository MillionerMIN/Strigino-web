import Wedding from '../assets/images/restaurant/wedding.jpg';
import Anniversary from '../assets/images/restaurant/anniversary.jpg';
import OfficeParties from '../assets/images/restaurant/office-parties.jpg';
import Graduation from '../assets/images/restaurant/graduation.jpg';
import Birthday from '../assets/images/restaurant/birthday.jpg';
import SlideFourchette from '../assets/images/restaurant/slide-fourchette.jpg';
import PhotoHeader from '../assets/images/restaurant/restaurant.jpg';

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
      photos: [Wedding],
      cost_1: 1800,
      reservation: {
        titleReserve: '«Свадебная церемония»',
        present: {
          title: 'Наш подарок для бракосочетающихся',
          gifts: [
            'Просторный ресторан, с вместимостью до 80 гостей',
            'Номер люкс для для молодых в подарок',
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
      photos: [Anniversary],
      // cost_1: 3800,
    },
    {
      id: '',
      title: '«Корпоративы»',
      desc: '',
      photos: [OfficeParties],
      // cost_1: 2300,
    },
    {
      id: '',
      title: '«Выпускные»',
      desc: '',
      photos: [Graduation],
      // cost_1: 2300,
    },
    {
      id: '',
      title: '«Детские праздники»',
      desc: '',
      photos: [Birthday],
      // cost_1: 2300,
    },
    {
      id: '',
      title: '«Фуршеты, презентации»',
      desc: '',
      photos: [SlideFourchette],
      // cost_1: 2300,
    },
  ],
};

export function getRestaurantData() {
  return restaurantData;
}
