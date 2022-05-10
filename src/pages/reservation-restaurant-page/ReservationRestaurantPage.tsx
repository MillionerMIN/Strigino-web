import './reservationRestaurantPage.scss';

import { BlockTitle } from '../../components/common/title/BlockTitle';
import setScrollTop from '../../components/common/scrollUp/setScrollTop';
// import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';

const title = {
  title: 'Бронирование',
};

const ReservationRestaurantPage = () => {
  setScrollTop();

  return (
    <div className="reservation-page reservation-page_pd">
      {/* <HeadingBlock data={content.heading} /> */}
      <div className="container">
        <BlockTitle data={title} />
        <div className="reservation-page__wrapper">
          <h6 className="title title_fs28 title_white reservation-page__title">
            Выберите даты заезда, выезда и количество гостей
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ReservationRestaurantPage;
