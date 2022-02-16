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
const Contacts = React.lazy(() => import('../pages/contacts/Contacts'));
const SpecialOffers = React.lazy(
  () => import('../pages/special-offers/SpecialOffers')
);
const PageError = React.lazy(() => import('../pages/pageError/PageError'));

export const PATH = {
  HOME: '/',
  NOT_FOUND: '/404',
  ABOUT: '/about',
  SPECIAL: '/special-offers',
  RESTAURANT: '/restaurant',
  ROOMS: '/rooms',
  CONFERENCE: '/conference-facilities',
  CONTACTS: '/contacts',
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
          <Route path={PATH.SPECIAL} element={<SpecialOffers />} />
          <Route path={PATH.RESTAURANT} element={<Restaurant />} />
          <Route path={PATH.ROOMS} element={<HotelRoom />} />
          <Route path={PATH.CONFERENCE} element={<ConferenceFacilities />} />
          <Route path={PATH.CONTACTS} element={<Contacts />} />
        </Routes>
      </Suspense>
    </main>
  );
};
