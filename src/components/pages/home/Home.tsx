import { Carousels } from '../../common/carousels/Carousels';

export const Home = () => {
  const arrayPhoto = [
    { url: 'http://hotelstrigino.ru/assets/gallery/3/52.jpg' },
    { url: 'http://hotelstrigino.ru/assets/gallery/3/53.JPG' },
    { url: 'http://hotelstrigino.ru/assets/gallery/3/53.JPG' },
  ];

  return (
    <div>
      <Carousels data={arrayPhoto} />
    </div>
  );
};
