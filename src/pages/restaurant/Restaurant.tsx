import './restaurant.scss';

import { CardNumber } from '../../components/common/cardNumber/CardNumber';
import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { Reservation } from '../../components/common/reservation/Reservation';
import { BlockTitle } from '../../components/common/title/BlockTitle';
import { getRestaurantData } from '../../data/restaurantData';
import setScrollTop from '../../components/common/scrollUp/setScrollTop';
import ModalWindow from '../../components/common/modalWindow/ModalWindow';
import { useState } from 'react';

const Restaurant = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  setScrollTop();
  const content = getRestaurantData();
  const events = content.eventsRes.map((item, i) => (
    <CardNumber
      key={i}
      data={item}
      index={i}
      reservation={'/reservation-restaurant'}
    />
  ));
  return (
    <div className="restaurant restaurant_pd">
      <HeadingBlock data={content.heading} />
      <Reservation />
      <BlockTitle data={content.title} />
      <div
        className="button button_center button_text-white button_border-white  restaurant__menuButton"
        onClick={() => setModalShow(true)}
      >
        Наше меню
      </div>
      <ModalWindow state={modalShow} setModalShow={setModalShow} />
      <div className="restaurant-wrapper">{events}</div>
    </div>
  );
};

export default Restaurant;
