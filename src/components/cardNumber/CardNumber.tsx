import './cardNumber.scss';

export const CardNumber = () => {
  return (
    <div className="cardNumber cardNumber_pd10 cardNumber_mr cardNumber_mrB40">
      <div className="cardNumber__grid">
        {/* <div className="mobile-title">
          <div className="title">Single</div>
          <div className="icon icon-delimiter"></div>
        </div> */}
        <a className="cardNumber__image" href="#" title="Single">
          <img
            src="https://www.hoteleurope.by/upload/resize_cache/iblock/fc3/590_400_2/fc39c3eddc34152adb4b3ef4d019eaee.jpg"
            alt="Single"
          />
          <div className="cardNumber__more button button_center button_text-white button_border-white">
            Читать больше
          </div>
        </a>
        <div className="info-wrapper info-wrapper_pd20">
          <div className="info">
            <a className="info__title" href="#" title="Single">
              Single
            </a>
            <div className="delimiter delimiter_mr10"></div>
            <div className="description">
              Уютный классический однокомнатный номер для одноместного
              размещения с видом на одну из центральных улиц города.
            </div>
            <a
              className="mobile cardNumber__more button"
              href="#"
              title="Single"
            >
              Читать больше
            </a>
            <a href="#" title="Забронировать" className="button button-order">
              Забронировать
            </a>
            <div className="price">
              от <span className="value text_fs26">291,03</span>{' '}
              <span className="currency text_fs26">BYN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
