import { NavLink } from 'react-router-dom';
import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { Reservation } from '../../components/common/reservation/Reservation';
import { BlockTitle } from '../../components/common/title/BlockTitle';
import './specialOffers.scss';
import PhotoHeader from '../../assets/images/about/about.jpg';
import PhotoOffer_1 from '../../assets/images/special-offers/special_1.jpg';
import PhotoOffer_2 from '../../assets/images/special-offers/special_2.jpg';
import PhotoOffer_3 from '../../assets/images/special-offers/special_3.jpg';
import PhotoOffer_4 from '../../assets/images/special-offers/special_4.jpg';

const heading = {
  title: 'СПЕЦПРЕДЛОЖЕНИЯ',
  photo: PhotoHeader,
};

const title = {
  title: 'Что мы вам предлагаем',
  description:
    'Заманчивые акции и предложения для бизнеса и индивидуального отдыха',
};

const offers = [
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
];

const SpecialOffers = () => {
  const itemsOffer = offers.map((item, i) => (
    <div className="special-offers__item" key={i}>
      <NavLink to="#" className="special-offers__link">
        <div className="special-offers__image">
          <img src={item.img} alt={item.title} />
          <div className="special-offers__more">
            <div className=" button button_center button_text-white button_border-white special-offers__btn">
              Читать больше
            </div>
          </div>
        </div>
        <div className="special-offers__info">
          <div className="special-offers__info_wrapper">
            <div className="title title_fs28 title_uppercase">{item.title}</div>
            <div className="delimiter"></div>
            <div className="special-offers__info_descr">{item.description}</div>
          </div>
        </div>
      </NavLink>
    </div>
  ));
  return (
    <div className="special-offers special-offers_pd">
      <HeadingBlock data={heading} />
      <Reservation />
      <BlockTitle data={title} />
      <div className="special-offers__wrapper">
        <div className="container">
          <div className="special-offers__list">{itemsOffer}</div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
