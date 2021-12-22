import { NavLink } from 'react-router-dom';
import { Social, SocialType } from '../common/social/Social';
import Pay from '../../icons/cards/pay-card.png';
import Logo from '../../img/logo/strigino-w-rus.svg';
import LogoEn from '../../img/logo/strigino-eng.svg';

import './footer.scss';

type FooterPropsType = {
  socials: SocialType[];
};

export const Footer = (props: FooterPropsType) => {
  const { socials } = props;

  return (
    <footer className="footer">
      <div className="footer__social">
        <div className="container">
          <div className="footer__wrapper">
            <Social className="social__link-fs25" socials={socials} />
            <div className="footer__contacts">
              <NavLink className="footer__link" to={'#'}>
                <span className="lable">Наш адрес:</span>
                <span className="value">
                  Россия, г.Н. Новгород, Автозаводский район, ул. Гнилицкая,
                  д.139
                </span>
              </NavLink>
              <NavLink className="footer__link" to={'/#'}>
                <span>Телефон для бронирования:</span>
                <span className="value">8(831) 269-16-12</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__information">
        <div className="container">
          <div className="footer__container">
            <div className="footer__left">
              <img className="footer__logo" src={Logo} alt="LogoRus" />
              <img className="footer__logo" src={LogoEn} alt="LogoEn" />
            </div>
            <div className="footer__right text_fs13">
              <p>
                Свидетельство о государственной регистрации № -------- от 6 июня
                ---- г. Гостинично - Ресторанный комплекс "Стригино" УНП
                ----------, Дата регистрации в торговом реестре ----------:
                06.07.2008 г.
              </p>
              <span>Вы можете оплатить наши услуги с помощью:</span>
              <img src={Pay} alt="Pay" />
            </div>
            <div className="footer__bottom">
              2015-2021 © Отель-ресторан Стригино | Все права защищены
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};