import './reservationPage.scss';

import { BlockTitle } from '../../components/common/title/BlockTitle';
import { useEffect } from 'react';
import { initWidget } from '../../components/common/init-widget/initWidget';
import setScrollTop from '../../components/common/scrollUp/setScrollTop';

const title = {
  title: 'Бронирование',
};

const ReservationPage = () => {
  setScrollTop();
  useEffect(
    () =>
      initWidget({
        id: 'be8a583c-e783-41c6-a4fb-96aa39848fe9',
        type: 'verticalBlock',
        form: {
          container: 'WidgetId',
          insert: 'before',
        },
      }),
    []
  );

  return (
    <div className="reservation-page reservation-page_pd">
      <div className="container">
        <BlockTitle data={title} />
        <div className="reservation-page__wrapper">
          <h6 className="title title_fs28 title_white reservation-page__title">
            Выберите даты заезда, выезда и количество гостей
          </h6>
          <div className="reservation-page__line"></div>

          <div className="reservation-page__widget" id="WidgetId"></div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
