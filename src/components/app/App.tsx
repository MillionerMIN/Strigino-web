import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style/_iconsfont.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Routers } from '../../route/Routers';
import { HashRouter } from 'react-router-dom';
import { getSocialsData } from '../../data/socialData';

function App() {
  const socials = getSocialsData();
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
