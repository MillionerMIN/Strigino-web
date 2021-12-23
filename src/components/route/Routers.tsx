import { Routes, Route } from 'react-router-dom';
import { About } from '../pages/about/About';
import ConferenceFacilities from '../pages/conference-facilities/ConferenceFacilities';
import { Home } from '../pages/home/Home';
import { HotelRoom } from '../pages/hotelRoom/HotelRoom';
import Restaurant from '../pages/restaurant/Restaurant';
import './routers.scss';

export const PATH = {
  HOME: '/home',
  ABOUT: '/about',
  RESTAURANT: '/restaurant',
  ROOMS: '/rooms',
  CONF: '/conference-facilities',
  // add paths
};

export const Routers = () => {
  return (
    <main className="main main_mr-top">
      {/*Routes выбирает первый подходящий роут*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={PATH.ABOUT} element={<About />} />
        <Route path={PATH.RESTAURANT} element={<Restaurant />} />
        <Route path={PATH.ROOMS} element={<HotelRoom />} />
        <Route path={PATH.CONF} element={<ConferenceFacilities />} />
      </Routes>
    </main>
  );
};
