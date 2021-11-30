import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/_iconsfont.scss';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Router } from '../route/Router';

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
      <Header socials={socials} />
      <Router />
      <Footer socials={socials} />
    </div>
  );
}

export default App;
