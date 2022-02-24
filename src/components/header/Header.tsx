import { useState } from 'react';
import './header.scss';
import { Social } from '../common/social/Social';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/icons/logo/logo.png';
import MobHeader from './MobHeader';
import { SocialType } from '../../data/socialData';
import { getMenuLeft, getMenuRight } from '../../data/headerLinkData';

type HeaderPropsType = {
  socials: SocialType[];
};

export const Header = (props: HeaderPropsType) => {
  const { socials } = props;
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => {
    setClick(!click);
  };

  const menusLeft = getMenuLeft();

  const menuLeft = menusLeft.map((item, i) => (
    <li className="block__item" key={i}>
      <NavLink
        className="block__link title_fs15"
        to={item.ref}
        onClick={handleClick}
      >
        {item.value}
      </NavLink>
    </li>
  ));
  const menusRight = getMenuRight();

  const menuRight = menusRight.map((item, i) => (
    <li className="block__item" key={i}>
      <NavLink
        className="block__link title_fs15"
        to={item.ref}
        onClick={handleClick}
      >
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
      {/* {MOB-HEADER} */}
      <MobHeader click={handleClick} />
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
              <div className="block block_center">
                <NavLink to="/">
                  <img
                    className="block__logo"
                    src={Logo}
                    alt="Гостинично - Ресторанный комплекс 'Стригино'"
                  />
                </NavLink>
              </div>
              <div className="block block_right">{menuRight}</div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
