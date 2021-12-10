import { NavLink } from 'react-router-dom';
import './reservation.scss';

export const Reservation = () => {
  return (
    <div className="reservation reservation_pd25">
      <div className="container">
        <NavLink to={'#'}>
          <span className="icon"></span>
          <span className="lable">Забранировать</span>
        </NavLink>
      </div>
    </div>
  );
};
