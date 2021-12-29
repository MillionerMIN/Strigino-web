import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';

import './routers.scss';

const About = React.lazy(() => import('../pages/about/About'));
const Restaurant = React.lazy(() => import('../pages/restaurant/Restaurant'));
const HotelRoom = React.lazy(() => import('../pages/hotelRoom/HotelRoom'));
const ConferenceFacilities = React.lazy(
  () => import('../pages/conference-facilities/ConferenceFacilities')
);
const PageError = React.lazy(() => import('../pages/pageError/PageError'));

export const PATH = {
  HOME: '/',
  NOT_FOUND: '/404',
  ABOUT: '/about',
  RESTAURANT: '/restaurant',
  ROOMS: '/rooms',
  CONF: '/conference-facilities',
};

export const Routers = () => {
  return (
    <main className="main main_mr-top">
      {/*Routes выбирает первый подходящий роут*/}
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path="*" element={<PageError />} />
          <Route path={PATH.ABOUT} element={<About />} />
          <Route path={PATH.RESTAURANT} element={<Restaurant />} />
          <Route path={PATH.ROOMS} element={<HotelRoom />} />
          <Route path={PATH.CONF} element={<ConferenceFacilities />} />
        </Routes>
      </Suspense>
    </main>
  );
};
