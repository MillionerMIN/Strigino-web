import './restaurant.scss';

import { CardNumber } from '../../components/common/cardNumber/CardNumber';
import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { Reservation } from '../../components/common/reservation/Reservation';
import { BlockTitle } from '../../components/common/title/BlockTitle';
import { getRestaurantData } from '../../data/restaurantData';
import setScrollTop from '../../components/common/scrollUp/setScrollTop';

const Restaurant = () => {
  setScrollTop();
  const content = getRestaurantData();
  const events = content.eventsRes.map((item, i) => (
    <CardNumber
      key={i}
      data={item}
      index={i}
      reservation={'/reservation-restaurant'}
    />
  ));
  return (
    <div className="restaurant restaurant_pd">
      <HeadingBlock data={content.heading} />
      <Reservation />
      <BlockTitle data={content.title} />
      <div className="restaurant-wrapper">{events}</div>
    </div>
  );
};

export default Restaurant;
