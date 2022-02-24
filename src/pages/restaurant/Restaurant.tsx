import './restaurant.scss';

import { CardNumber } from '../../components/common/cardNumber/CardNumber';
import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { Reservation } from '../../components/common/reservation/Reservation';
import { BlockTitle } from '../../components/common/title/BlockTitle';
import { getRestaurantData } from '../../data/restaurantData';

const Restaurant = () => {
  const content = getRestaurantData();
  const events = content.eventsRes.map((item, i) => (
    <CardNumber key={i} data={item} index={i} />
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
