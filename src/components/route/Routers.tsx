import { Routes, Route } from 'react-router-dom';
import { About } from '../pages/about/About';
import { Home } from '../pages/home/Home';
import { HotelRoom } from '../pages/hotelRoom/HotelRoom';
import Restaurant from '../pages/restaurant/Restaurant';
import './routers.scss';

export const PATH = {
  HOME: '/home',
  ABOUT: '/about',
  RESTAURANT: '/restaurant',
  ROOMS: '/rooms',

  // add paths
};

export const Routers = () => {
  return (
    <div className="main main_mr-top">
      {/*Routes выбирает первый подходящий роут*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={PATH.ABOUT} element={<About />} />
        <Route path={PATH.RESTAURANT} element={<Restaurant />} />
        <Route path={PATH.ROOMS} element={<HotelRoom />} />
      </Routes>
    </div>
  );
};
