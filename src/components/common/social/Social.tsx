import { SocialType } from '../../../data/socialData';
import './social.scss';

type SocialPropsType = {
  socials: SocialType[];
  className?: string;
};

export const Social = (props: SocialPropsType) => {
  const { socials, className } = props;

  const finallyClass = `social__link ${className}`;
  const social = socials.map((item, i) => (
    <li className="social__item" key={i}>
      <a className={finallyClass} href={item.link} title={item.name}>
        <span className={item.img}></span>
      </a>
    </li>
  ));
  return <ul className="social social_mr social_pd">{social}</ul>;
};
