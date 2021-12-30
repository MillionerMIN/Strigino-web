import { NavLink } from 'react-router-dom';
import Logo from '../../icons/logo/logo.png';

import './mobHeader.scss';

type MobHeaderType = {
  click: () => void;
};

const MobHeader = (props: MobHeaderType) => {
  const { click } = props;
  return (
    <div className="mobHeader mobHeader_position">
      <div className="mobHeader__wrapper">
        <div className="mobHeader__left"></div>
        <div className="mobHeader__logo">
          <NavLink to="/" onClick={click}>
            <img
              className="mobHeader__img"
              src={Logo}
              alt="Гостинично - Ресторанный комплекс 'Стригино'"
            />
          </NavLink>
        </div>
        <div className="mobHeader__right"></div>
      </div>
    </div>
  );
};

export default MobHeader;
