import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style/_iconsfont.scss';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Routers } from '../../route/Routers';
import { HashRouter } from 'react-router-dom';

const socials = [
  {
    name: 'Facebook',
    img: 'icon-facebook-icon',
    link: 'https://www.facebook.com/hotelstrigino',
  },
  {
    name: 'Instagram',
    img: 'icon-instagram-icon',
    link: 'https://instagram.com/strigino_restaurant_hotel?utm_medium=copy_link',
  },
  {
    name: 'Viber',
    img: 'icon-viber-icon',
    link: 'viber://add?number=79990763646',
  },
  {
    name: 'Whatsapp',
    img: 'icon-whatsapp-icon',
    link: 'https://api.whatsapp.com/send?phone=79990763646',
  },
  { name: 'Telegram', img: 'icon-telegram-icon', link: '#' },
];

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header socials={socials} />
        <Routers />
        <Footer socials={socials} />
      </HashRouter>
    </div>
  );
}

export default App;
