import './reservationPage.scss';

import { BlockTitle } from '../../components/common/title/BlockTitle';

const title = {
  title: 'Бронирование',
};

const ReservationPage = () => {
  return (
    <div className="reservation-page reservation-page_pd">
      <div className="container">
        <BlockTitle data={title} />
        <div className="reservation-page__wrapper">
          <h6 className="title title_fs28 title_white reservation-page__title">
            Выберите даты заезда, выезда и количество гостей
          </h6>

          <div className="reservation-page__widget" id="WidgetId"></div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
