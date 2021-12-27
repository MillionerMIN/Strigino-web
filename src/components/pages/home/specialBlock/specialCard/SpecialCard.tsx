import { NavLink } from 'react-router-dom';

type SpecialCardType = {
  items: { img: string; title: string; desc?: string }[];
};

const SpecialCard = (props: SpecialCardType) => {
  const { items } = props;

  const card = items.map((item, i) => (
    <div className="special-block__item" key={i}>
      <NavLink to={'#'} title={item.title}>
        <div className="special-block__image">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="special-block__info">
          <div className="title title_uppercase">{item.title}</div>
          <div className="special-block__desc">{item.desc}</div>
        </div>
      </NavLink>
    </div>
  ));

  return <div className="special-block__wrapper">{card}</div>;
};

export default SpecialCard;
