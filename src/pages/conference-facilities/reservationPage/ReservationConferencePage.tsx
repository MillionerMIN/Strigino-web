import './reservationConferencePage.scss';

// import { useState } from 'react';

import setScrollTop from '../../../components/common/scrollUp/setScrollTop';
import { HeadingBlock } from '../../../components/common/heading-block/HeadingBlock';
import { BlockTitle } from '../../../components/common/title/BlockTitle';
// import ModalWindow from '../../../components/common/modalWindow/ModalWindow';
import FormReservation from '../../../components/formReservation/FormReservation';
import { getConferenceData } from '../../../data/conferenceData';
// import AlertCustom from '../../../components/common/alert/AlertCustom';
// import GiftBox from '../../../components/common/lotties/gift-box/GiftBox';
// import GiftBox from '../../components/common/lotties/gift-box/GiftBox';
// import AlertCustom from '../../components/common/alert/AlertCustom';

const ReservationConferencePage = () => {
  // const [modalShow, setModalShow] = useState<boolean>(false);
  setScrollTop();
  // const [show, setShow] = useState<boolean>(false);
  const content = getConferenceData();

  // const giftsContent = content.roomsService[0].reservation?.present.gifts.map(
  //   (gift, i) => <li key={i}>{gift}</li>
  // );

  return (
    <div className="reservation-restaurant-page reservation-restaurant-page_pd">
      <HeadingBlock
        data={{
          title: content.roomsService[0].reservation?.titleReserve,
          photo: content.roomsService[0].photos[0],
        }}
      />
      <div className="container">
        <BlockTitle
          data={{ title: content.roomsService[0].reservation?.present.title }}
        />
        {/* <ul className="reservation-restaurant-page__gifts reservation-restaurant-page__gifts_md reservation-restaurant-page__gifts_pd ">
          {giftsContent}
        </ul> */}
        {/* <div className="reservation-restaurant-page__wrapper"> */}
        {/* <div className="reservation-restaurant-page__row">
            <div onClick={() => setShow(true)}>
              {show && <AlertCustom />}
              <GiftBox />
            </div>

            <div
              className="reservation-restaurant-page__menu"
              onClick={() => setModalShow(true)}
            >
              <div className="reservation-restaurant-page__menu-title">
                ????????
              </div>
            </div>
            <ModalWindow state={modalShow} setModalShow={setModalShow} />
          </div> */}
        {/* <div> */}
        <h2 className="title title_fs28 title_align-start">
          ?????????? ?????? ????????????????????????
        </h2>
        <FormReservation
          event={content.roomsService[0].reservation?.titleReserve}
        />
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ReservationConferencePage;
