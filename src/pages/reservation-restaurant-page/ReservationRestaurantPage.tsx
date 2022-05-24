import './reservationRestaurantPage.scss';

import { BlockTitle } from '../../components/common/title/BlockTitle';
import setScrollTop from '../../components/common/scrollUp/setScrollTop';
import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { getRestaurantData } from '../../data/restaurantData';
import FormReservation from '../../components/formReservation/FormReservation';
import ModalWindow from '../../components/common/modalWindow/ModalWindow';
import { useState } from 'react';

const ReservationRestaurantPage = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  setScrollTop();
  const content = getRestaurantData();

  const giftsContent = content.eventsRes[0].reservation?.present.gifts.map(
    (gift, i) => <li key={i}>{gift}</li>
  );

  return (
    <div className="reservation-restaurant-page reservation-restaurant-page_pd">
      <HeadingBlock
        data={{
          title: content.eventsRes[0].reservation?.titleReserve,
          photo: content.eventsRes[0].photos[0],
        }}
      />
      <div className="container">
        <BlockTitle
          data={{ title: content.eventsRes[0].reservation?.present.title }}
        />
        <ul className="reservation-restaurant-page__gifts reservation-restaurant-page__gifts_md reservation-restaurant-page__gifts_pd ">
          {giftsContent}
        </ul>
        <h2 className="title title_fs28 title_align-start">Форма заказа</h2>
        <div className="reservation-restaurant-page__wrapper">
          <FormReservation />
          <div className="reservation-restaurant-page__row">
            <div className="reservation-restaurant-page__contact">
              <div className="reservation-restaurant-page__info">
                <div className="reservation-restaurant-page__contactTitle">
                  ОРГАНИЗАЦИЯ МЕРОПРИЯТИЙ
                </div>

                <a
                  className="reservation-restaurant-page__item"
                  href="tel:+78312691612"
                  title="+7 (831) 269-16-12"
                >
                  +7(831) 269-16-12
                </a>
                <a
                  className="reservation-restaurant-page__item"
                  href="mailto:hotelstrigino@mail.ru"
                  title="hotelstrigino@mail.ru"
                >
                  hotelstrigino@mail.ru
                </a>
              </div>
            </div>
            <div
              className="reservation-restaurant-page__menu"
              onClick={() => setModalShow(true)}
            >
              Меню
            </div>
            <ModalWindow state={modalShow} setModalShow={setModalShow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationRestaurantPage;
