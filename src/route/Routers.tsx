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
  () =>
    import(
      '../pages/restaurant/reservation-pages/reservation-restaurant-page/ReservationRestaurantPage'
    )
);
const ReservationBirthdayPage = React.lazy(
  () =>
    import(
      '../pages/restaurant/reservation-pages/reservation-birthday-page/ReservationBirthdayPage'
    )
);
const ReservationBuffetPage = React.lazy(
  () =>
    import(
      '../pages/restaurant/reservation-pages/reservation-buffet-page/ReservationBuffetPage'
    )
);
const ReservationChildrenPage = React.lazy(
  () =>
    import(
      '../pages/restaurant/reservation-pages/reservation-children-page/ReservationChildrenPage'
    )
);
const ReservationSeniorPage = React.lazy(
  () =>
    import(
      '../pages/restaurant/reservation-pages/reservation-senior-page/ReservationSeniorPage'
    )
);
const ReservationConferencePage = React.lazy(
  () =>
    import(
      '../pages/conference-facilities/reservationPage/ReservationConferencePage'
    )
);
const ReservationOfficePartiesPage = React.lazy(
  () =>
    import(
      '../pages/restaurant/reservation-pages/reservation-office-parties-page/ReservationOfficePartiesPage'
    )
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
  RESTAURANT_BIRTHDAY: '/reservation-birthday',
  RESTAURANT_OFFICE_PARTIES: '/reservation-office-parties',
  RESTAURANT_SENIOR: '/reservation-senior',
  RESTAURANT_CHILDREN: '/reservation-children',
  RESTAURANT_BUFFET: '/reservation-buffet',
  ROOMS: '/rooms',
  CONFERENCE: '/conference-facilities',
  CONFERENCE_RESERVATION: '/conference-reservation',
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
          <Route
            path={PATH.RESTAURANT_BIRTHDAY}
            element={<ReservationBirthdayPage />}
          />
          <Route
            path={PATH.RESTAURANT_OFFICE_PARTIES}
            element={<ReservationOfficePartiesPage />}
          />
          <Route
            path={PATH.RESTAURANT_SENIOR}
            element={<ReservationSeniorPage />}
          />
          <Route
            path={PATH.RESTAURANT_CHILDREN}
            element={<ReservationChildrenPage />}
          />
          <Route
            path={PATH.RESTAURANT_BUFFET}
            element={<ReservationBuffetPage />}
          />
          <Route path={PATH.ROOMS} element={<HotelRoom />}>
            <Route index element={<RoomsList />} />
            <Route path=":roomId" element={<RoomInfo />} />
          </Route>

          <Route path={PATH.CONFERENCE} element={<ConferenceFacilities />} />
          <Route
            path={PATH.CONFERENCE_RESERVATION}
            element={<ReservationConferencePage />}
          />
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
