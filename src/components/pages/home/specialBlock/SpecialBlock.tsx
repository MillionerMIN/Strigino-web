import { BlockTitle } from '../../../common/title/BlockTitle';
import './specialBlock.scss';

const title = {
  title: 'Акции и спецпредложения',
  description:
    'Мы предлагаем широкий спектр услуг как для бизнеса,так и для индивидуального отдыха',
  colorTitle: 'title_white',
};

const SpecialBlock = () => {
  return (
    <div className="special-block special-block_pd">
      <div className="container">
        <BlockTitle data={title} />
        <div className="special-block__slider"></div>
        <div className="special-block__button">
          <div className="button button_text-white button_center">
            Смотреть все
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialBlock;
