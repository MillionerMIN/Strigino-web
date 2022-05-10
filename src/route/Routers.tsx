import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/common/lotties/Loader';
import ScrollUp from '../components/common/scrollUp/ScrollUp';
import { Home } from '../pages/home/Home';
import { socialsData } from '../data/socialData';

import './routers.scss';

const About = React.lazy(() => import('../pages/about/About'));
const Restaurant = React.lazy(() => import('../pages/restaurant/Restaurant'));
const ReservationRestaurantPage = React.lazy(
  () => import('../pages/reservation-restaurant-page/ReservationRestaurantPage')
);
const HotelRoom = React.lazy(() => import('../pages/hotelRoom/HotelRoom'));
const ConferenceFacilities = React.lazy(
  () => import('../pages/conference-facilities/ConferenceFacilities')
);
const Contacts = React.lazy(() => import('../pages/contacts/Contacts'));
const SpecialOffers = React.lazy(
  () => import('../pages/special-offers/SpecialOffers')
);
const PageError = React.lazy(() => import('../pages/pageError/PageError'));
const ReservationPage = React.lazy(
  () => import('../pages/reservation-page/ReservationPage')
);
const RoomsList = React.lazy(() => import('../components/roomsList/RoomsList'));
const RoomInfo = React.lazy(() => import('../components/roomInfo/RoomInfo'));

export const PATH = {
  HOME: '/',
  NOT_FOUND: '/404',
  ABOUT: '/about',
  SPECIAL: '/special-offers',
  RESTAURANT: '/restaurant',
  RESTAURANT_RESERVATION: '/reservation-restaurant',
  ROOMS: '/rooms',
  CONFERENCE: '/conference-facilities',
  CONTACTS: '/contacts',
  RESERVATION: '/reservation',
  // ROOMS_STUDIO: '/rooms/studio',
};

export const Routers = () => {
  return (
    <main className="main main_mr-top">
      <ScrollUp />
      {/*Routes выбирает первый подходящий роут*/}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path="*" element={<PageError />} />
          <Route path={PATH.ABOUT} element={<About />} />
          <Route path={PATH.SPECIAL} element={<SpecialOffers />} />
          <Route path={PATH.RESTAURANT} element={<Restaurant />} />
          <Route
            path={PATH.RESTAURANT_RESERVATION}
            element={<ReservationRestaurantPage />}
          />
          <Route path={PATH.ROOMS} element={<HotelRoom />}>
            <Route index element={<RoomsList />} />
            <Route path=":roomId" element={<RoomInfo />} />
          </Route>

          <Route path={PATH.CONFERENCE} element={<ConferenceFacilities />}>
            {/* <Route index element={<RoomsList />} />
            <Route path=":roomId" element={<RoomInfo />} /> */}
          </Route>
          <Route
            path={PATH.CONTACTS}
            element={<Contacts socials={socialsData} />}
          />
          <Route path={PATH.RESERVATION} element={<ReservationPage />} />
        </Routes>
      </Suspense>
    </main>
  );
};
