import './cardPrice.scss';
import { ImUser, ImUsers } from 'react-icons/im';

type CardPriceType = {
  person: number;
  cost: number | undefined;
  hour?: boolean;
};

const CardPrice = (props: CardPriceType) => {
  const { person, cost, hour } = props;
  const img = person === 1 ? <ImUser /> : <ImUsers />;

  const desc = hour ? '1 час' : 'в сутки';

  return (
    <div className="contact-price">
      <div className="contact-price__grid">
        <div className="contact-price__icon">{img}</div>
        <div className="contact-price__info">
          до <span>{cost} RUB</span> {desc}
        </div>
      </div>
    </div>
  );
};

export default CardPrice;
