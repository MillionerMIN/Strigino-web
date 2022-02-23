import './reservation.scss';

import { useEffect } from 'react';

import { initWidget } from '../init-widget/initWidget.js';

export const Reservation = () => {
  useEffect(
    () =>
      initWidget({
        id: 'be8a583c-e783-41c6-a4fb-96aa39848fe9',
        type: 'horizontalBlock',
        form: {
          container: 'KonturWidget',
          insert: 'before',
        },
      }),
    []
  );

  return (
    <div className="reservation reservation_pd25">
      <div id="KonturWidget"></div>
    </div>
  );
};
