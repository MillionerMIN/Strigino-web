import './roomInfo.scss';

import { useParams } from 'react-router-dom';
import { getHotelRoom, getHotelRooms } from '../../data/hotelRoomsData';
import { BlockTitle } from '../common/title/BlockTitle';
import { Slider } from '../common/slider/Slider';

const RoomInfo = () => {
  const param = useParams();
  const desc = getHotelRooms().title.description;
  const room = getHotelRoom(param.roomId);
  console.log(room?.photos);

  const title = {
    title: room?.title,
    description: desc,
  };
  return (
    <div className="room-info room-info_pd">
      <div className="container">
        <BlockTitle data={title} />
        <Slider data={room?.photos} />
      </div>
    </div>
  );
};

export default RoomInfo;
