import { CardNumber } from '../../components/common/cardNumber/CardNumber';
import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { Reservation } from '../../components/common/reservation/Reservation';
import { BlockTitle } from '../../components/common/title/BlockTitle';
import Wedding from '../../assets/img/restaurant/wedding.jpg';
import Anniversary from '../../assets/img/restaurant/anniversary.jpg';
import OfficeParties from '../../assets/img/restaurant/office-parties.jpg';
import Graduation from '../../assets/img/restaurant/graduation.jpg';
import Birthday from '../../assets/img/restaurant/birthday.jpg';
import SlideFourchette from '../../assets/img/restaurant/slide-fourchette.jpg';
import './restaurant.scss';

const title = {
  title: 'ЛУЧШИЙ РЕСТОРАН ДЛЯ ВАС',
  description:
    'Позвольте себе испытать поистине изысканный вкус блюд русской, европейской и кавказской кухонь',
};

const heading = {
  title: 'Ресторан',
  photo: 'https://cf.bstatic.com/images/hotel/max600/168/168167243.jpg',
};

const eventsRes = [
  {
    title: '«Свадьбы»',
    desc: 'Мы верим в то, что браки заключаются на небесах и помогаем каждой паре воплотить свои мечты',
    url: Wedding,
    cost: 3300,
  },
  {
    title: '«Юбилеи, Дни рождения»',
    desc: 'Бла бла',
    url: Anniversary,
    cost: 3800,
  },
  {
    title: '«Корпоративы»',
    desc: 'бла бла ',
    url: OfficeParties,
    cost: 2300,
  },
  {
    title: '«Выпускные»',
    desc: 'бла бла',
    url: Graduation,
    cost: 2300,
  },
  {
    title: '«Детские праздники»',
    desc: 'бла бла',
    url: Birthday,
    cost: 2300,
  },
  {
    title: '«Фуршеты, презентации»',
    desc: 'Бла Бла',
    url: SlideFourchette,
    cost: 2300,
  },
];

const Restaurant = () => {
  const events = eventsRes.map((item, i) => (
    <CardNumber key={i} data={item} index={i} />
  ));
  return (
    <div className="restaurant restaurant_pd">
      <HeadingBlock data={heading} />
      <Reservation />
      <BlockTitle data={title} />
      <div className="restaurant-wrapper">{events}</div>
    </div>
  );
};

export default Restaurant;
