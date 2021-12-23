import { Routes, Route } from 'react-router-dom';
import PageError from '../pages/pageError/pageError';
import { About } from '../pages/about/About';
import ConferenceFacilities from '../pages/conference-facilities/ConferenceFacilities';
import { Home } from '../pages/home/Home';
import { HotelRoom } from '../pages/hotelRoom/HotelRoom';
import Restaurant from '../pages/restaurant/Restaurant';
import './routers.scss';

export const PATH = {
  HOME: '/home',
  NOT_FOUND: '/404',
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
        <Route path={PATH.NOT_FOUND} element={<PageError />} />
        <Route path={PATH.ABOUT} element={<About />} />
        <Route path={PATH.RESTAURANT} element={<Restaurant />} />
        <Route path={PATH.ROOMS} element={<HotelRoom />} />
        <Route path={PATH.CONF} element={<ConferenceFacilities />} />
      </Routes>
    </main>
  );
};
