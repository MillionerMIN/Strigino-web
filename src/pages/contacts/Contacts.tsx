import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { Reservation } from '../../components/common/reservation/Reservation';
import { BlockTitle } from '../../components/common/title/BlockTitle';
import { CustomMap } from '../../components/customMap/CustomMap';
import h24 from '../../assets/icons/contacts/24h.svg';

import './contacts.scss';
import setScrollTop from '../../components/common/scrollUp/setScrollTop';
import ContactImage from '../../assets/images/contacts/contacts.jpg';

const heading = {
  title: 'Контакты',
  photo: ContactImage,
};

const title = {
  title: 'СВЯЖИТЕСЬ С НАМИ',
  description:
    'Мы всегда готовы ответить на все интересующие Вас вопросы, Вы можете связаться с нами любым удобным для Вас способом',
};

const mapTitle = {
  title: 'Наше расположение',
  description:
    'Отель-ресторан "Стригино" располагается по координатам GPS: широта: 56°11′44.16″N (56.195599), долгота: 43°46′30.86″E (43.7752384)',
};

const lists = [
  {
    name: 'Бронирование',
    href: 'tel:+79990763646',
    tel: '+7 (999) 076-36-46',
    mailto: 'mailto:hotelstrigino@mail.ru',
    email: 'hotelstrigino@mail.ru',
  },
  {
    name: 'Организация деловых мероприятий',
    href: 'tel:+79990763646',
    tel: '+7 (999) 076-36-46',
    mailto: 'mailto:hotelstrigino@mail.ru',
    email: 'hotelstrigino@mail.ru',
  },
  {
    name: 'Ресторан',
    href: 'tel:+79990763646',
    tel: '+7 (999) 076-36-46',
    mailto: 'mailto:hotelstrigino@mail.ru',
    email: 'hotelstrigino@mail.ru',
  },
  {
    name: 'Банкетная служба',
    href: 'tel:+79990763646',
    tel: '+7 (999) 076-36-46',
    mailto: 'mailto:hotelstrigino@mail.ru',
    email: 'hotelstrigino@mail.ru',
  },
];

const Contacts = () => {
  setScrollTop();
  const itemsList = lists.map((item, i) => (
    <div className="contacts__block_item" key={i}>
      <div className="contacts__block_name">{item.name}</div>
      <div className="contacts__block_info">
        <div className="contacts__block_line">
          <div className="contacts__block_label">тел.: </div>
          <a className="contacts__block_link" href={item.href}>
            {item.tel}
          </a>
        </div>
        <div className="contacts__block_line">
          <div className="contacts__block_label">e-mail: </div>
          <a className="contacts__block_link" href={item.mailto}>
            {item.email}
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="contacts">
      <HeadingBlock data={heading} />
      <Reservation />
      <BlockTitle data={title} />
      <div className="contacts__wrapper">
        <div className="contacts__contact">
          <div className="contacts__contact_grid">
            <div className="contacts__icon">
              <img src={h24} alt="24h" />
            </div>
            <div className="contacts__info">
              <a
                className="contacts__item"
                href="tel:+79990763646"
                title="+7 (999) 076-36-46"
              >
                +7(999) <span>076-36-46</span>
              </a>
              <a
                className="contacts__item"
                href="mailto:hotelstrigino@mail.ru"
                title="hotelstrigino@mail.ru"
              >
                <span>hotelstrigino</span>@mail.ru
              </a>
            </div>
          </div>
        </div>
        <div className="contacts__block">
          <div className="container">
            <div className="contacts__block_wrapper">
              <div className="contacts__block_list">{itemsList}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts__map">
        <BlockTitle data={mapTitle} />
        <div className="contacts__description contacts__description_wrapper">
          <div className="container">
            <div className="text">
              Россия, г. Н. Новгород, Автозаводский район, ул. Гнилицкая, д.139.
              Вы прибыли в аэропорт или на ж/д вокзал, мы поможем организовать
              Вам встречу.
            </div>
          </div>
        </div>
        <CustomMap />
      </div>
    </div>
  );
};

export default Contacts;
