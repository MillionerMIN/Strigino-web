import { BlockTitle } from '../../components/common/title/BlockTitle';
import { HeadingBlock } from '../../components/common/heading-block/HeadingBlock';
import { Reservation } from '../../components/common/reservation/Reservation';
import AboutPhoto_1 from '../../assets/images/about/about_1.jpg';

import './about.scss';
import { getAboutData } from '../../data/aboutData';

const About = () => {
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
            <h2 className="title title_fs36">Коротко о нас</h2>
            <p>
              Гостинично – ресторанный комплекс «Стригино» расположен в
              живописном уголке соснового бора, на берегу реки Ока, в 5 мин.
              езды от аэропорта.
            </p>
            <p>
              Отель «Стригино» представляет современному жителю мегаполиса
              уникальный шанс на полноценный загородный отдых от привычной суеты
              в черте города.
            </p>

            <p>
              Отель «Стригино» — это не просто гостиница, но и полноценный
              комплекс услуг, который поможет почувствовать себя по -настоящему
              отдохнувшим, даже если вы приехали просто переночевать.
            </p>

            <p>
              В распоряжении гостей 17 новых просторных гостиничных номеров
              различной категории комфортности, ресторан со вкусной домашней
              кухней, бильярд и конференц-зал.
            </p>

            <p>
              На первом этаже отеля расположен роскошный и респектабельный
              банкетный зал, оформление которого выполнено в светлых тонах с
              большим количеством золота и зеркал. Ресторан «Стригино» — это
              подходящая атмосфера для проведения свадебных банкетов, дней
              рождений, корпоративных вечеринок. Мы поможем вам с составлением
              меню, украшением зала и планированием всей праздничной программы.
            </p>

            <p>
              Радушный и компетентный персонал обеспечит индивидуальный подход к
              каждому гостю.
            </p>

            <p>
              В летнее время Вы можете насладиться превосходной прогулкой по
              сосновому бору, спуститься к реке Ока, искупаться и позагорать. А
              любителям активного отдыха в зимнее время мы БЕСПЛАТНО предлагаем
              взять у нас лыжи и совершить пробежку по 3-х или 5-ти километровой
              трассе.
            </p>

            <p className="text_fs22">
              ГОСТИНИЧНО-РЕСТОРАННЙ КОМПЛЕКС «СТРИГИНО» — ЭТО АТМОСФЕРА
              ГОСТЕПРИИМСТВА ДЛЯ ВСТРЕЧ И ОТДЫХА!
            </p>
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
