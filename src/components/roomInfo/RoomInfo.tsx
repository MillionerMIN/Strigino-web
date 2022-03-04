import './roomInfo.scss';

import { useParams } from 'react-router-dom';
import { getHotelRoom, getHotelRooms } from '../../data/hotelRoomsData';
import { BlockTitle } from '../common/title/BlockTitle';
import SliderCustom from '../common/customSlider/SliderCustom';
import CardPrice from '../common/cardPrice/CardPrice';
import setScrollTop from '../common/scrollUp/setScrollTop';

const RoomInfo = () => {
  setScrollTop();
  const param = useParams();
  const desc = getHotelRooms().title.description;
  const room = getHotelRoom(param.roomId);

  const title = {
    title: room?.title,
    description: desc,
  };

  const cardsPrice = () => {
    if (room?.person !== 1) {
      return (
        <>
          <CardPrice person={1} cost={room?.cost_1} />
          <CardPrice person={2} cost={room?.cost_2} />
        </>
      );
    } else {
      return <CardPrice person={1} cost={room?.cost_1} />;
    }
  };
  return (
    <div className="room-info room-info_pd">
      <div className="container">
        <BlockTitle data={title} />
        <SliderCustom photos={room?.photos} />
        <div className="row justify-content-md-center room-info__information">
          <div className="col">{room?.desc}</div>
          <div className="col col-lg-4">{cardsPrice()}</div>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
