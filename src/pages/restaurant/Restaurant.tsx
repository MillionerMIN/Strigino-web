import './restaurant.scss';

import { CardNumber } from '../../components/common/cardNumber/CardNumber';
import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { BlockTitle } from '../../components/common/title/BlockTitle';
import { getRestaurantData } from '../../data/restaurantData';
import setScrollTop from '../../components/common/scrollUp/setScrollTop';
import ModalWindow from '../../components/common/modalWindow/ModalWindow';
import { useState } from 'react';
import ModalWin from '../../components/common/modalWin/ModalWin';
import FormReservation from '../../components/formReservation/FormReservation';

const Restaurant = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalReservation, setModalReservation] = useState<boolean>(false);
  setScrollTop();
  const content = getRestaurantData();
  const events = content.eventsRes.map((item, i) => (
    <CardNumber
      key={i}
      data={item}
      index={i}
      reservation={item.reservation?.route}
    />
  ));

  return (
    <div className="restaurant restaurant_pd">
      <HeadingBlock data={content.heading} />
      <div className="restaurant__reservation">
        <div
          className="button button_center button_text-white button_border-white  restaurant__reservationButton"
          onClick={() => setModalReservation(true)}
        >
          Забронировать столик
        </div>
      </div>
      <BlockTitle data={content.title} />
      <div
        className="button button_center button_text-white button_border-white  restaurant__menuButton"
        onClick={() => setModalShow(true)}
      >
        Наше меню
      </div>
      <ModalWindow state={modalShow} setModalShow={setModalShow} />
      <ModalWin
        show={modalReservation}
        setModalShow={setModalReservation}
        children={<FormReservation />}
      />
      <div className="restaurant-wrapper">{events}</div>
    </div>
  );
};

export default Restaurant;
