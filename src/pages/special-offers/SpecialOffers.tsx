import { NavLink } from 'react-router-dom';
import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { Reservation } from '../../components/common/reservation/Reservation';
import { BlockTitle } from '../../components/common/title/BlockTitle';
import './specialOffers.scss';
import { getSpacialOffersData } from '../../data/spacialOffers';
import setScrollTop from '../../components/common/scrollUp/setScrollTop';

const SpecialOffers = () => {
  setScrollTop();
  const content = getSpacialOffersData();

  const itemsOffer = content.offers.map((item, i) => (
    <div className="special-offers__item" key={i}>
      <NavLink to="#" className="special-offers__link">
        <div className="special-offers__image">
          <img src={item.img} alt={item.title} />
          <div className="special-offers__more">
            <div className=" button button_center button_text-white button_border-white special-offers__btn">
              Читать больше
            </div>
          </div>
        </div>
        <div className="special-offers__info">
          <div className="special-offers__info_wrapper">
            <div className="title title_fs28 title_uppercase">{item.title}</div>
            <div className="delimiter"></div>
            <div className="special-offers__info_descr">{item.description}</div>
          </div>
        </div>
      </NavLink>
    </div>
  ));
  return (
    <div className="special-offers special-offers_pd">
      <HeadingBlock data={content.header} />
      <Reservation />
      <BlockTitle data={content.title} />
      <div className="special-offers__wrapper">
        <div className="container">
          <div className="special-offers__list">{itemsOffer}</div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
