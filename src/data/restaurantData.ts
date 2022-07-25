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
      photos: [Anniversary],
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
      photos: [OfficeParties],
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
      photos: [Graduation],
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
      photos: [SlideFourchette],
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
