import { BlockTitle } from '../../components/common/title/BlockTitle';
import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { Reservation } from '../../components/common/reservation/Reservation';
import AboutPhoto_1 from '../../assets/images/about/about_1.jpg';

import './about.scss';
import { getAboutData } from '../../data/aboutData';
import setScrollTop from '../../components/common/scrollUp/setScrollTop';

const About = () => {
  setScrollTop();
  const content = getAboutData();
  return (
    <div className="about about_pd">
      <HeadingBlock data={content.header} />
      <Reservation />
      <BlockTitle data={content.title} />
      <div className="container">
        <div className="about__content">
          <div className="about__image">
            <img className="image" src={AboutPhoto_1} alt="PhotoHotel.jpg" />
          </div>
        </div>
        <div className="about__wrapper">
          <div className="about__left">
            <h2 className="title title_fs36">
              ГОСТИНИЧНО-РЕСТОРАННЙ КОМПЛЕКС «СТРИГИНО» — ЭТО АТМОСФЕРА
              ГОСТЕПРИИМСТВА ДЛЯ ВСТРЕЧ И ОТДЫХА!
            </h2>
            <p>
              Мы искренне рады приветствовать Вас в нашем отеле в атмосфере уюта
              и комфорта.
            </p>
            <p>
              Вдали от городской суеты, на берегу реки Оки, Вы можете насладится
              пением птиц, надышаться свежим воздухом, погулять по зеленому
              бору, а зимой прокатиться на лыжах.
            </p>

            <p>
              На первом этаже расположен ресторан на 80 мест, конференц-зал на
              25 мест, бильярд.
            </p>

            <p>
              Ресторан "Стригино" имеет возможность проведения различных
              мероприятий: деловых встреч, семинаров, фуршетов, корпоративов,
              юбилеев и других праздничных и торжественных событий. Свадьба,
              проведенная у нас, будет незабываемой!
            </p>

            <p>
              Отель "Стригино" предоставляет 17 комфортабельных номеров 4
              категорий: стандарт, свадебный, студио, семейный. Великолепно
              подходит для групповых заездов.
            </p>

            <p>Будем рады видеть Вас в нашем отеле!</p>
          </div>
          <div className="about__right">
            <div className="about__note">
              <div className="about__quote">
                <div className="text text_fs22 about__text">
                  У меня непритязательный вкус. Мне вполне достаточно самого
                  лучшего.
                </div>
                <div className="title title_gold about__title">
                  Оскар Уайльд
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
