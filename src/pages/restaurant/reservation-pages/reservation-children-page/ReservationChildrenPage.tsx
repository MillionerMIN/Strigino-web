import './reservationChildrenPage.scss';

import React, { useState } from 'react';
import Border from '../../../../assets/icons/other/borderMenu.png';
import setScrollTop from '../../../../components/common/scrollUp/setScrollTop';
import { getRestaurantData } from '../../../../data/restaurantData';
import { HeadingBlock } from '../../../../components/common/heading-block/HeadingBlock';
import { BlockTitle } from '../../../../components/common/title/BlockTitle';
import ModalWindow from '../../../../components/common/modalWindow/ModalWindow';
import FormReservation from '../../../../components/formReservation/FormReservation';
import { childrenMenu, mainMenu_2 } from '../../../../data/striginoMenu';
const Menu = React.lazy(
  () => import('../../../../components/common/menu/Menu')
);

const ReservationChildrenPage = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  setScrollTop();
  // const [show, setShow] = useState<boolean>(false);
  const content = getRestaurantData();

  const giftsContent = content.eventsRes[4].reservation?.present.gifts.map(
    (gift, i) => <li key={i}>{gift}</li>
  );

  return (
    <div className="reservation-restaurant-page reservation-restaurant-page_pd">
      <HeadingBlock
        data={{
          title: content.eventsRes[4].reservation?.titleReserve,
          photo: content.eventsRes[4].photos[0],
        }}
      />
      <div className="container">
        <BlockTitle
          data={{ title: content.eventsRes[4].reservation?.present.title }}
        />
        <ul className="reservation-restaurant-page__gifts reservation-restaurant-page__gifts_md reservation-restaurant-page__gifts_pd ">
          {giftsContent}
        </ul>
        <div className="reservation-restaurant-page__wrapper">
          <div className="reservation-restaurant-page__row">
            {/* <div onClick={() => setShow(true)}>
              {show && <AlertCustom />}
              <GiftBox />
            </div> */}

            <div
              className="reservation-restaurant-page__menu"
              onClick={() => setModalShow(true)}
            >
              <img
                src={Border}
                alt="borderMenu"
                className="reservation-restaurant-page__menu-border"
              />
              <div className="reservation-restaurant-page__menu-title">
                Меню
              </div>
            </div>
            <ModalWindow
              children={
                <Menu
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  menuChildren={childrenMenu}
                  menuMain_2={mainMenu_2}
                />
              }
            />
          </div>
          <div>
            <h2 className="title title_fs28 title_align-start">Форма заказа</h2>
            <FormReservation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationChildrenPage;
