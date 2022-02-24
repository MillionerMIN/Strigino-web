import { NavLink } from 'react-router-dom';
import { RoomHotelType } from '../../../data/hotelRoomsData';

import './cardNumber.scss';

type CardNumberType = {
  index: number;
  data: RoomHotelType;
};

export const CardNumber = (props: CardNumberType) => {
  // const { index } = props;
  const { id, title, desc, image, cost } = props.data;

  const description = desc.slice(0, 100);
  // const classCardNumber =
  //   index % 2 === 0
  //     ? 'cardNumber__image'
  //     : 'cardNumber__image cardNumber__image_right';
  // const classInfoWrapper =
  //   index % 2 === 0
  //     ? 'info-wrapper info-wrapper_pd20'
  //     : 'info-wrapper info-wrapper_pd20 info-wrapper_left';
  // const classPrice = index % 2 === 0 ? 'price price_right' : 'price price_left';

  return (
    <div className="cardNumber cardNumber_pd10 cardNumber_mr">
      <div className="cardNumber__grid">
        {/* <div className="mobile-title">
          <div className="title">Single</div>
          <div className="icon icon-delimiter"></div>
        </div> */}
        <div className={'cardNumber__image cardNumber__image_right'}>
          <NavLink to={id} title={title}>
            <img className="cardNumber__photo" src={image} alt={title} />
            <div className="cardNumber__more">
              <div className=" button button_center button_text-white button_border-white cardNumber__btn">
                Читать больше
              </div>
            </div>
          </NavLink>
        </div>

        {/* infirmation card */}
        <div className={'info-wrapper info-wrapper_pd20'}>
          <div className="info">
            <NavLink className="info__title link_color" to={'#'} title="Single">
              {title}
            </NavLink>
            <div className="delimiter delimiter_mr10"></div>
            <div className="description text_fs15">{description}</div>
            <NavLink
              to={'/reservation'}
              title="Забронировать"
              className="button button_order button_hover link_color"
            >
              Забронировать
            </NavLink>
            <div className={'price price_right'}>
              от <span className="value text_fs26">{cost}</span>{' '}
              <span className="currency text_fs26">RUB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
