import { NavLink } from 'react-router-dom';
import { Social } from '../common/social/Social';
import Logo from '../../assets/icons/logo/logo-strigino.png';

import './footer.scss';
import { SocialType } from '../../data/socialData';
import { getOrganisationData } from '../../data/footerData';

const now = new Date();

type FooterPropsType = {
  socials: SocialType[];
};

export const Footer = (props: FooterPropsType) => {
  const { socials } = props;
  const content = getOrganisationData();
  const fullYear = now.getFullYear();

  return (
    <footer className="footer">
      <div className="footer__social">
        <div className="container">
          <div className="footer__wrapper">
            <Social className="social__link-fs25" socials={socials} />
            <div className="footer__contacts">
              <NavLink className="footer__link" to={'#'}>
                <span className="lable">Наш адрес:</span>
                <span className="value">{content.address}</span>
              </NavLink>
              <a className="footer__link" href={`tel:${content.phoneNumber}`}>
                <span>Телефон для бронирования:</span>
                <span className="value">{content.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__information">
        <div className="container">
          <div className="footer__container">
            <div className="footer__left">
              <img className="footer__logo" src={Logo} alt="LogoRus" />
            </div>
            <div className="footer__right text_fs13">
              <p>{content.certificate}</p>
            </div>
            <div className="footer__bottom">
              2015-{fullYear} © Отель-ресторан Стригино | Все права защищены
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
