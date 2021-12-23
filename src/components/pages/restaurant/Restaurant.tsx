import { CardNumber } from '../../common/cardNumber/CardNumber';
import { HeadingBlock } from '../../common/heading-block/HeadingBlock';
import { Reservation } from '../../common/reservation/Reservation';
import { BlockTitle } from '../../common/title/BlockTitle';
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
    title: '«Свадбы»',
    desc: 'Мы верим в то, что браки заключаются на небесах и помогаем каждой паре воплотить свои мечты',
    url: 'https://n1s1.hsmedia.ru/07/a6/16/07a616194e89c565b4b21adfbe999a79/728x542_1_872b4f20ec7bceb08b3a9c011e59a10d@1000x745_0xac120003_9936791021594995638.gif',
    cost: 3300,
  },
  {
    title: '«Юбилеи, Дни рождения»',
    desc: 'Бла бла',
    url: 'https://www.krasnayagorka.ru/sites/default/files/uk.jpg',
    cost: 3800,
  },
  {
    title: '«Корпоративы»',
    desc: 'бла бла ',
    url: 'https://catering-muscat.ru/img/blog/blog_ny-3.jpg',
    cost: 2300,
  },
  {
    title: '«Выпускные»',
    desc: 'бла бла',
    url: 'https://www.m24.ru/b/d/nBkSUhL2hFMgnM23J76BvMKnxdDs95C-miTNnuWR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=fbqx8U4cUBJEDRDt5CLc4g.jpg',
    cost: 2300,
  },
  {
    title: '«Детские праздники»',
    desc: 'бла бла',
    url: 'https://mama.ua/media/points/photos/2017/05/dr.jpg',
    cost: 2300,
  },
  {
    title: '«Фуршеты, презентации»',
    desc: 'Бла Бла',
    url: 'https://www.barin-catering.com.ua/data/_uploaded/image/Fourchette/slide-fourchette-1.jpg',
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
