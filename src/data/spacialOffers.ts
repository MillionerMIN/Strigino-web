import PhotoHeader from '../assets/images/about/about.jpg';
import PhotoOffer_1 from '../assets/images/special-offers/special_1.jpg';
import PhotoOffer_2 from '../assets/images/special-offers/special_2.jpg';
import PhotoOffer_3 from '../assets/images/special-offers/special_3.jpg';
import PhotoOffer_4 from '../assets/images/special-offers/special_4.jpg';

type SpacialOffersType = {
  header: { title: string; photo: string };
  title: { title: string; description: string };
  offers: { img: string; href: string; title: string; description: string }[];
};

const spacialOffers: SpacialOffersType = {
  header: { title: 'СПЕЦПРЕДЛОЖЕНИЯ', photo: PhotoHeader },
  title: {
    title: 'Что мы вам предлагаем',
    description:
      'Заманчивые акции и предложения для бизнеса и индивидуального отдыха',
  },
  offers: [
    {
      img: PhotoOffer_4,
      href: '#',
      title: 'Ваша свадьба',
      description: 'Свадебный номер в подарок',
    },
    {
      img: PhotoOffer_3,
      href: '#',
      title: 'Банкеты и корпоративы',
      description:
        'При заказе в понедельник,вторник,Среда---СКИДКА 10% (кроме праздничных дней)',
    },
    {
      img: PhotoOffer_2,
      href: '#',
      title: 'Раннее бронирование',
      description:
        'Тариф доступен для бронирования не менее, чем за 20 дней до заезда',
    },
    {
      img: PhotoOffer_1,
      href: '#',
      title: 'Тариф "Длительное проживание"',
      description: 'LONG STAY – СКИДКИ ПРИ ПРОЖИВАНИИ ОТ 4 ДНЕЙ',
    },
  ],
};

export function getSpacialOffersData() {
  return spacialOffers;
}
