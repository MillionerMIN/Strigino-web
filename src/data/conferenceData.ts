import ConfHeader from '../assets/images/conference/conference_header.jpg';
import Conf_1 from '../assets/images/conference/conference_1.jpg';
import Conf_2 from '../assets/images/conference/conference_2.jpg';

type ConferenceDataType = {
  header: { title: string; photo: string };
  title: { title: string; description: string };
  roomsService: {
    id: string;
    title: string;
    desc: string;
    photos: string[];
    cost_1: number;
  }[];
};

const conferenceData: ConferenceDataType = {
  header: {
    title: 'Конференц-услуги',
    photo: ConfHeader,
  },

  title: {
    title: 'Лучшее для вашего бизнеса',
    description:
      'Cозданы идеальные условия для проведения деловых мероприятий с высоким уровнем сервиса и вниманием к каждому гостю',
  },
  roomsService: [
    {
      id: 'conferenceRoom',
      title: 'Конферент-зал',
      desc: 'Зал переговоров позволяет с максимальным комфортом организовать и провести мероприятия любого формата',
      photos: [Conf_1, Conf_2],
      cost_1: 400,
    },
  ],
};

export function getConferenceData() {
  return conferenceData;
}
