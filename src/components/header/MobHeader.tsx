import Logo from '../../icons/logo/logo.svg';

import './mobHeader.scss';

const MobHeader = () => {
  return (
    <div className="mobHeader mobHeader_position">
      <div className="mobHeader__wrapper">
        <div className="mobHeader__left"></div>
        <div className="mobHeader__logo">
          <img
            className="mobHeader__img"
            src={Logo}
            alt="Гостинично - Ресторанный комплекс 'Стригино'"
          />
        </div>
        <div className="mobHeader__right"></div>
      </div>
    </div>
  );
};

export default MobHeader;
