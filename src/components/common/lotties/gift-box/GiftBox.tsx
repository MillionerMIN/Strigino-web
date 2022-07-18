import './giftBox.scss';

import Lottie from 'react-lottie';
import animationData from './lf30_editor_vonyaria.json';

type GiftBoxType = {
  className?: string;
};

const GiftBox = (props: GiftBoxType) => {
  const { className } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSetting: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className={`gift-box ${className}`}>
      <Lottie options={defaultOptions} width={150} height={150} />
    </div>
  );
};

export default GiftBox;
