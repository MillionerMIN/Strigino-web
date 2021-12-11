import { NavLink } from 'react-router-dom';
import './cardNumber.scss';

export const CardNumber = () => {
  return (
    <div className="cardNumber cardNumber_pd10 cardNumber_mr">
      <div className="cardNumber__grid">
        {/* <div className="mobile-title">
          <div className="title">Single</div>
          <div className="icon icon-delimiter"></div>
        </div> */}
        <div className="cardNumber__image">
          <NavLink to={'#'} title="Single">
            <img
              src="https://www.hoteleurope.by/upload/resize_cache/iblock/fc3/590_400_2/fc39c3eddc34152adb4b3ef4d019eaee.jpg"
              alt="Single"
            />
            <div className="cardNumber__more">
              <div className=" button button_center button_text-white button_border-white cardNumber__btn">
                Читать больше
              </div>
            </div>
          </NavLink>
        </div>

        {/* infirmation card */}
        <div className="info-wrapper info-wrapper_pd20">
          <div className="info">
            <NavLink className="info__title" to={'#'} title="Single">
              Single
            </NavLink>
            <div className="delimiter delimiter_mr10"></div>
            <div className="description text_fs15">
              Уютный классический однокомнатный номер для одноместного
              размещения с видом на одну из центральных улиц города.
            </div>
            <NavLink
              to={'#'}
              title="Забронировать"
              className="button button_order"
            >
              Забронировать
            </NavLink>
            <div className="price price_right">
              от <span className="value text_fs26">291,03</span>{' '}
              <span className="currency text_fs26">BYN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
