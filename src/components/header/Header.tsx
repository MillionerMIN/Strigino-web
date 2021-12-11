import { useState } from 'react';
import './header.scss';
import { Social, SocialType } from '../common/social/Social';
import { NavLink } from 'react-router-dom';

type HeaderPropsType = {
  socials: SocialType[];
};

export const Header = (props: HeaderPropsType) => {
  const { socials } = props;
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => {
    setClick(!click);
  };

  const menusLeft = [
    { value: 'об отеле', ref: '/about' },
    { value: 'спецпредложения', ref: '/special-offers' },
    { value: 'рестораны и бары', ref: '/restaurants' },
  ];

  const menuLeft = menusLeft.map((item, i) => (
    <li className="block__item" key={i}>
      <NavLink className="block__link title_fs15" to={item.ref}>
        {item.value}
      </NavLink>
    </li>
  ));
  const menusRight = [
    { value: 'номера', ref: '/rooms' },
    { value: 'конференц-услуги', ref: '/service' },
    { value: 'контакты', ref: '/contact' },
  ];

  const menuRight = menusRight.map((item, i) => (
    <li className="block__item" key={i}>
      <NavLink className="block__link title_fs15" to={item.ref}>
        {item.value}
      </NavLink>
    </li>
  ));

  const clazz = click
    ? 'header header_position header_open'
    : 'header header_position';

  return (
    <>
      {/* {MOB-HEADER} */}
      <div className="mob-header mob-header_position">
        <button className="mob-header__menu" onClick={handleClick}>
          <div className={click ? 'mob-header__humbugger_active' : ''}>
            <span className="mob-header__line"></span>
            <span className="mob-header__line"></span>
            <span className="mob-header__line"></span>
          </div>
        </button>
      </div>
      {/* HEADER */}
      <header className={clazz}>
        <div className="header__social">
          <div className="container">
            <div className="header__wrapper">
              <a
                className="header__mail"
                href="mailto:hotelstrigino@mail.ru"
                title="hotelstrigino@mail.ru"
              >
                <span className="label">email: </span>
                <span className="value">hotelstrigino@mail.ru</span>
              </a>
              <Social className="social__link-fs20" socials={socials} />
              <div className="header__language">
                <span>RU </span>
                <span>EN</span>
              </div>
            </div>
          </div>
        </div>
        <div className="header__menu">
          <div className="container">
            <nav className="menu">
              <div className="block block_left">{menuLeft}</div>
              <div>bfg</div>
              <div className="block block_right">{menuRight}</div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
