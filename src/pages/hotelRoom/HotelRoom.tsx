import './hotelRoom.scss';
import { Outlet } from 'react-router-dom';

import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { Reservation } from '../../components/common/reservation/Reservation';
import { getHotelRooms } from '../../data/hotelRoomsData';

const HotelRoom = () => {
  const content = getHotelRooms();

  return (
    <>
      <main className="rooms rooms_pd">
        <HeadingBlock data={content.header} />
        <Reservation />
        <Outlet />
      </main>
    </>
  );
};

export default HotelRoom;
