import { CardNumber } from '../../components/common/cardNumber/CardNumber';
import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { Reservation } from '../../components/common/reservation/Reservation';
import { BlockTitle } from '../../components/common/title/BlockTitle';
import './conferenceFacilities.scss';
import { getConferenceData } from '../../data/conferenceData';
import setScrollTop from '../../components/common/scrollUp/setScrollTop';

const ConferenceFacilities = () => {
  setScrollTop();
  const roomSer = getConferenceData();
  const events = roomSer.roomsService.map((item, i) => (
    <CardNumber
      key={i}
      data={item}
      index={i}
      hour
      reservation={item.reservation?.route}
    />
  ));
  return (
    <div className="conference-facilities conference-facilities_pd">
      <HeadingBlock data={roomSer.header} />
      <Reservation />
      <BlockTitle data={roomSer.title} />
      <div className="conference-facilities-wrapper">{events}</div>
    </div>
  );
};

export default ConferenceFacilities;
