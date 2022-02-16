import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style/_iconsfont.scss';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Routers } from '../../route/Routers';
import { HashRouter } from 'react-router-dom';

const socials = [
  { name: 'Facebook', img: 'icon-facebook-icon', link: '#' },
  { name: 'Instagram', img: 'icon-instagram-icon', link: '#' },
  { name: 'Vk', img: 'icon-vk-icon', link: '#' },
  { name: 'Viber', img: 'icon-viber-icon', link: '#' },
  { name: 'Whatsapp', img: 'icon-whatsapp-icon', link: '#' },
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
