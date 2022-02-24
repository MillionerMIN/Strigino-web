import { CardNumber } from '../../components/common/cardNumber/CardNumber';
import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { Reservation } from '../../components/common/reservation/Reservation';
import { BlockTitle } from '../../components/common/title/BlockTitle';
import comfroom from '../../assets/img/conference-facilities/conference-facilities.jpg';
import './conferenceFacilities.scss';

const title = {
  title: 'Лучшее для вашего бизнеса',
  description:
    'Cозданы идеальные условия для проведения деловых мероприятий с высоким уровнем сервиса и вниманием к каждому гостю',
};

const heading = {
  title: 'Конференц-услуги',
  photo: comfroom,
};

const roomsService = [
  {
    id: '',
    title: '«Конферент-зал»',
    desc: 'Зал переговоров позволяет с максимальным комфортом организовать и провести мероприятия любого формата.',
    image: comfroom,
    cost: 3300,
  },
];

const ConferenceFacilities = () => {
  const events = roomsService.map((item, i) => (
    <CardNumber key={i} data={item} index={i} />
  ));
  return (
    <div className="conference-facilities conference-facilities_pd">
      <HeadingBlock data={heading} />
      <Reservation />
      <BlockTitle data={title} />
      <div className="conference-facilities-wrapper">{events}</div>
    </div>
  );
};

export default ConferenceFacilities;
