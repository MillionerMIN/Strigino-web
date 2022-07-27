import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RoomHotelType } from '../../../data/hotelRoomsData';
import GalleryPhotos from '../galleryPhotos/GalleryPhotos';
import ModalWindow from '../modalWindow/ModalWindow';

import './cardNumber.scss';

type CardNumberType = {
  index?: number;
  data: RoomHotelType;
  hour?: boolean;
  reservation?: string;
};

export const CardNumber = (props: CardNumberType) => {
  const { hour, reservation = '/reservation' } = props;
  const { id, title, desc, photos, cost_1 } = props.data;
  const [showModal, setShowModal] = useState<boolean>(false);

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
            <img className="cardNumber__photo" src={photos[0]} alt={title} />
            <div className="cardNumber__more">
              <div
                className=" button button_center button_text-white button_border-white cardNumber__btn"
                onClick={() => setShowModal(true)}
              >
                Фото
              </div>
            </div>
          </NavLink>
        </div>

        <ModalWindow
          children={
            <GalleryPhotos
              show={showModal}
              onHide={() => setShowModal(false)}
              photos={photos}
            />
          }
        />

        {/* infirmation card */}
        <div className={'info-wrapper info-wrapper_pd20'}>
          <div className="info">
            <NavLink className="info__title link_color" to={id} title="Single">
              {title}
            </NavLink>
            <div className="delimiter delimiter_mr10"></div>
            <div className="description text_fs15">{description}</div>
            <NavLink
              to={reservation}
              title="Забронировать"
              className="button button_order button_hover link_color"
            >
              Забронировать
            </NavLink>
            {cost_1 && (
              <div className={'price price_right'}>
                от <span className="value text_fs26">{cost_1}</span>{' '}
                <span className="currency text_fs26">RUB</span>
                {hour ? '/час' : ''}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
