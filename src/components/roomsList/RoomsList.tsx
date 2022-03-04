import './roomList.scss';

import { getHotelRooms } from '../../data/hotelRoomsData';
import { CardNumber } from '../common/cardNumber/CardNumber';
import { BlockTitle } from '../common/title/BlockTitle';
import setScrollTop from '../common/scrollUp/setScrollTop';

const RoomsList = () => {
  setScrollTop();
  const content = getHotelRooms();
  const rooms = content.rooms.map((item, i) => (
    <CardNumber key={i} data={item} index={i} />
  ));
  return (
    <>
      <BlockTitle data={content.title} />
      <div className="rooms__wrapper">{rooms}</div>
    </>
  );
};

export default RoomsList;
