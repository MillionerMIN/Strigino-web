import './restaurant.scss';

import { CardNumber } from '../../components/common/cardNumber/CardNumber';
import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { BlockTitle } from '../../components/common/title/BlockTitle';
import { getRestaurantData } from '../../data/restaurantData';
import setScrollTop from '../../components/common/scrollUp/setScrollTop';
import ModalWindow from '../../components/common/modalWindow/ModalWindow';
import React, { useState } from 'react';
import ModalWin from '../../components/common/modalWin/ModalWin';
import FormReservation from '../../components/formReservation/FormReservation';

import {
  mainMenu,
  childrenMenu,
  mainMenu_2,
  buffetMenu,
  snakeForBeer,
  banquetMenu,
  MenuPropsType,
  BuffetMenuType,
} from '../../data/striginoMenu';

const Menu = React.lazy(() => import('../../components/common/menu/Menu'));

const namesButton = [
  {
    name: 'Наше меню',
    menu: { mainMenu, mainMenu_2, snakeForBeer, childrenMenu },
  },
  { name: 'Банкетное меню', menu: { banquetMenu, buffetMenu } },
];

const Restaurant = () => {
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
  const buttonsMenu = namesButton.map((item, i) => (
    <ButtonMenu key={i} name={item.name} menu={item.menu} />
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
      <div className="restaurant__menuButton_wrapper">{buttonsMenu}</div>
      <ModalWin
        show={modalReservation}
        setModalShow={setModalReservation}
        children={<FormReservation />}
      />
      <div className="restaurant-wrapper">{events}</div>
    </div>
  );
};

const ButtonMenu = (props: ButtonMenuType) => {
  const { name, menu } = props;
  const [modalShow, setModalShow] = useState<boolean>(false);
  return (
    <>
      <div
        className="button button_center button_text-white button_border-white  restaurant__menuButton"
        onClick={() => setModalShow(true)}
      >
        {name}
      </div>
      <ModalWindow
        children={
          <Menu
            show={modalShow}
            onHide={() => setModalShow(false)}
            menuMain={menu.mainMenu}
            menuMain_2={menu.mainMenu_2}
            menuSnake={menu.snakeForBeer}
            menuChildren={menu.childrenMenu}
            menuBanquet={menu.banquetMenu}
            menuBuffer={menu.buffetMenu}
          />
        }
      />
    </>
  );
};

type ButtonMenuType = {
  name: string;
  menu: {
    mainMenu?: MenuPropsType;
    mainMenu_2?: MenuPropsType;
    snakeForBeer?: MenuPropsType;
    childrenMenu?: MenuPropsType;
    banquetMenu?: MenuPropsType;
    buffetMenu?: BuffetMenuType;
  };
};

export default Restaurant;
